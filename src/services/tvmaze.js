import http from '../utils/http';

export default TVMaze = () => {
  const allShows = async (page) => {
    return await http.coreGet(`/shows?page=${page}`);
  };

  const castShow = async (id) => {
    return await http.coreGet(`/shows/${id}/cast`);
  };

  const castCredits = async (id) => {
    return await http.coreGet(`/people/${id}/castcredits`);
  };

  const searchShow = async (query) => {
    return await http.coreGet(`/search/shows?q=${query}`);
  };

  const showDetails = async (id) => {
    return await http.coreGet(`/shows/${id}`);
  };

  const showImages = async (id) => {
    return await http.coreGet(`/shows/${id}/images`);
  };

  const showSeasons = async (id) => {
    return await http.coreGet(`/shows/${id}/seasons`);
  };

  const episodeList = async (id) => {
    return await http.coreGet(`/shows/${id}/episodes`);
  };

  const episodeDetails = async (id, season, number) => {
    return await http.coreGet(
      `shows/${id}/episodebynumber?season=${season}&number=${number}`
    );
  };

  const personDetails = async (id) => {
    return await http.coreGet(
      `/people/${id}`
    );
  };

  const getHref = async (href) => {
    return await http.coreGet(href);
  };

  return {
    allShows,
    castCredits,
    castShow,
    searchShow,
    showDetails,
    showImages,
    showSeasons,
    episodeList,
    episodeDetails,
    personDetails,
    getHref,
  };
};
