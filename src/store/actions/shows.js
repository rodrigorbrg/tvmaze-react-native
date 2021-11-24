import { Creators } from '../reducers/shows';
export const addFavoriteShow = (show) => {
  return Creators.addFavoriteShow(show);
};

export const removeFavoriteShow = (id) => {
  return Creators.removeFavoriteShow(id);
};
