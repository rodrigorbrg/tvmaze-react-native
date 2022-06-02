import { useCallback, useState } from 'react';

import TVMaze from '../services/tvmaze';
import { Episode, CastType, Show } from '../types/Shows';

export const useShows = () => {
  const [page, setPage] = useState<number>(0);
  const [shows, setShows] = useState<Show[]>([]);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [sections, setSections] = useState<
    { title: string; data: Episode[] }[]
  >([]);
  const [cast, setCast] = useState<CastType[]>([]);
  const [loadingShow, setLoadingShow] = useState<boolean>(false);
  const [loadingEpisode, setLoadingEpisode] = useState<boolean>(false);
  const [loadingCast, setLoadingCast] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const loadMoreShows = useCallback(async () => {
    const service = TVMaze();
    setLoadingShow(true);
    const [err, res] = await service.allShows(page);
    setLoadingShow(false);
    if (res) {
      setPage(page + 1);
      setShows(shows.concat(res));
    }
    if (err) {
      setError(err);
    }
  }, [page, shows]);

  const createSections = useCallback((episodes: Episode[]) => {
    const seasonSection: {
      title: string;
      data: Episode[];
    }[] = [];

    episodes.map((episode: Episode) => {
      const season = seasonSection.find((section) => {
        return section.title === `Season ${episode.season}`;
      });
      if (season) {
        season.data.push(episode);
      } else {
        seasonSection.push({
          title: `Season ${episode.season}`,
          data: [episode]
        });
      }
    });
    setSections(seasonSection);
  }, []);

  const loadEpisodes = useCallback(
    async (showId: number) => {
      const service = TVMaze();
      setLoadingEpisode(true);
      const [err, res] = await service.episodeList(showId);
      setLoadingEpisode(false);
      if (res) {
        setEpisodes(res);
        createSections(res);
      }
      if (err) {
        setError(err);
      }
    },
    [createSections]
  );

  const loadCast = useCallback(async (showId: number) => {
    const service = TVMaze();
    setLoadingCast(true);
    const [err, res] = await service.castShow(showId);
    setLoadingCast(false);
    if (res) {
      setCast(res);
    }
    if (err) {
      setError(err);
    }
  }, []);

  return {
    shows,
    episodes,
    sections,
    cast,
    loadingShow,
    loadingEpisode,
    loadingCast,
    error,
    loadMoreShows,
    loadEpisodes,
    loadCast
  };
};
