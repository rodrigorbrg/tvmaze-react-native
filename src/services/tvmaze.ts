import { CastType, Episode, Person, Show, ShowReference } from '../types/Shows';
import http from '../utils/http';

export type ResponseType<T> = [string, null] | [null, T];

const TVMaze = () => {
  const allShows = async (page: number): Promise<ResponseType<Show[]>> => {
    const [err, res] = await http.coreGet(`/shows?page=${page}`);
    return [err, res];
  };

  const castShow = async (id: number): Promise<ResponseType<CastType[]>> => {
    const [err, res] = await http.coreGet(`/shows/${id}/cast`);
    return [err, res];
  };

  const castCredits = async (
    id: number
  ): Promise<ResponseType<ShowReference[]>> => {
    const [err, res] = await http.coreGet(`/people/${id}/castcredits`);
    return [err, res];
  };

  const searchShow = async (
    query: string
  ): Promise<ResponseType<{ show: Show }[]>> => {
    const [err, res] = await http.coreGet(`/search/shows?q=${query}`);
    return [err, res];
  };

  const episodeList = async (id: number): Promise<ResponseType<Episode[]>> => {
    const [err, res] = await http.coreGet(`/shows/${id}/episodes`);
    return [err, res];
  };

  const episodeDetails = async (
    id: number,
    season: number,
    number: number
  ): Promise<ResponseType<Episode[]>> => {
    const [err, res] = await http.coreGet(
      `shows/${id}/episodebynumber?season=${season}&number=${number}`
    );
    return [err, res];
  };

  const personDetails = async (id: number): Promise<ResponseType<Person>> => {
    const [err, res] = await http.coreGet(`/people/${id}`);
    return [err, res];
  };

  const getHref = async (href: string): Promise<ResponseType<Show>> => {
    const [err, res] = await http.coreGet(href);
    return [err, res];
  };

  return {
    allShows,
    castCredits,
    castShow,
    searchShow,
    episodeList,
    episodeDetails,
    personDetails,
    getHref
  };
};

export default TVMaze;
