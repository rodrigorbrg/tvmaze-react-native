import { Creators } from '../reducers/shows';
export const addFavoriteShow = () => async (show) => {  
  console.log('addFavoriteShow')
  return dispatch => { 
    dispatch(Creators.addFavoriteShow(show));
  }
};

