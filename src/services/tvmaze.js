import http from '../utils/http';

export default TVMaze = () => {
  const allShows = async (page) => {
    return await http.coreGet(`/shows?page=${page}`);
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

  return {
    allShows,
    searchShow,
    showDetails,
    showImages,
    showSeasons,
    episodeList,
    episodeDetails,
  };
};
// Show {
//   "score": 0.9083924,
//   "show": {
//       "id": 139,
//       "url": "https://www.tvmaze.com/shows/139/girls",
//       "name": "Girls",
//       "type": "Scripted",
//       "language": "English",
//       "genres": [
//           "Drama",
//           "Romance"
//       ],
//       "status": "Ended",
//       "runtime": 30,
//       "averageRuntime": 30,
//       "premiered": "2012-04-15",
//       "ended": "2017-04-16",
//       "officialSite": "http://www.hbo.com/girls",
//       "schedule": {
//           "time": "22:00",
//           "days": [
//               "Sunday"
//           ]
//       },
//       "rating": {
//           "average": 6.6
//       },
//       "weight": 97,
//       "network": {
//           "id": 8,
//           "name": "HBO",
//           "country": {
//               "name": "United States",
//               "code": "US",
//               "timezone": "America/New_York"
//           }
//       },
//       "webChannel": null,
//       "dvdCountry": null,
//       "externals": {
//           "tvrage": 30124,
//           "thetvdb": 220411,
//           "imdb": "tt1723816"
//       },
//       "image": {
//           "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
//           "original": "https://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
//       },
//       "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
//       "updated": 1611310521,
//       "_links": {
//           "self": {
//               "href": "https://api.tvmaze.com/shows/139"
//           },
//           "previousepisode": {
//               "href": "https://api.tvmaze.com/episodes/1079686"
//           }
//       }
//   }
// },
