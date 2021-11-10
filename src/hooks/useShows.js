import { useCallback, useState } from 'react';

import TVMaze from '../services/tvmaze';

export const useShows = () => {
  const [page, setPage] = useState(0);
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [sections, setSections] = useState([]);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const service = TVMaze();

  const loadMoreShows = useCallback(async () => {
    setLoading(true);
    const [err, res] = await service.allShows(page);
    setLoading(false);
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
    const [err, res] = await service.episodeList(showId);
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
    const [err, res] = await service.castShow(showId);
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
    loading,
    error,
    loadMoreShows,
    loadEpisodes,
    loadCast,
  };
};
