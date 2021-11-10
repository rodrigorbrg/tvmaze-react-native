import { useCallback, useState } from 'react';

import TVMaze from '../services/tvmaze';

export const useShows = () => {
  const [page, setPage] = useState(0);
  const [shows, setShows] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [sections, setSections] = useState([]);
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

  const loadEpisodes = useCallback(async (showId) => {
    const [err, res] = await service.episodeList(showId);
    if (res) {
      setEpisodes(res);
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

  const createSections = useCallback((show) => {
    let seasonSection = [];
    if (episodes && show) {
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
    }
  }, []);

  return {
    shows,
    episodes,
    sections,
    loading,
    error,
    loadMoreShows,
    loadEpisodes,
    loadCast,
  };
};
