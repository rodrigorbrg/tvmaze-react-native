import { useCallback, useState } from 'react';

import TVMaze from '../services/tvmaze';

export const useShows = () => {
  const [page, setPage] = useState(0);
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [sections, setSections] = useState([]);
  const [cast, setCast] = useState([]);
  const [loadingShow, setLoadingShow] = useState(false);
  const [loadingEpisode, setLoadingEpisode] = useState(false);
  const [loadingCast, setLoadingCast] = useState(false);
  const [error, setError] = useState(null);
  const service = TVMaze();

  const loadMoreShows = useCallback(async () => {
    setLoadingShow(true);
    const [err, res] = await service.allShows(page);
    setLoadingShow(false);
    if (res) {
      setPage(page + 1);
      setShows(shows.concat(res));
    }
    if (err) {
      setError(error);
    }
  }, []);

  const createSections = useCallback((episodes) => {
    let seasonSection = [];

    episodes.map((episode) => {
      const season = seasonSection.find((section) => {
        return section.title === `Season ${episode.season}`;
      });
      if (season) {
        season.data.push(episode);
      } else {
        seasonSection.push({
          title: `Season ${episode.season}`,
          data: [episode],
        });
      }
    });
    setSections(seasonSection);
  }, []);

  const loadEpisodes = useCallback(async (showId) => {
    setLoadingEpisode(true);
    const [err, res] = await service.episodeList(showId);
    setLoadingEpisode(false);
    if (res) {
      setEpisodes(res);
      createSections(res);
    }
    if (err) {
      setError(error);
    }
  }, []);

  const loadCast = useCallback(async (showId) => {
    const service = TVMaze();
    setLoadingCast(true);
    const [err, res] = await service.castShow(showId);
    setLoadingCast(false);
    if (res) {
      setCast(res);
    }
    if (err) {
      setError(error);
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
    loadCast,
  };
};
