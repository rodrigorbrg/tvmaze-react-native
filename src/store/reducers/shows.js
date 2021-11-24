import { ADD_FAVORITE_SHOWS, REMOVE_FAVORITE_SHOW } from '../actions/types';

const initialState = {
  favorities: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_SHOWS:
      if (!state.favorities.find((show) => show.id === action.payload.id)) {
        return {
          ...state,
          favorities: state.favorities
            .concat(action.payload)
            .sort((a, b) => a.name.localeCompare(b.name))
        };
      }
      break;
    case REMOVE_FAVORITE_SHOW:
      return {
        ...state,
        favorities: state.favorities.filter(
          (show) => show.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export const Creators = {
  addFavoriteShow: (show) => {
    return {
      type: ADD_FAVORITE_SHOWS,
      payload: show
    };
  },
  removeFavoriteShow: (id) => {
    return {
      type: REMOVE_FAVORITE_SHOW,
      payload: id
    };
  }
};

export default reducer;
