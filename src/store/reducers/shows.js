import {
  FAVORITIES_SHOWS,
} from '../actions/types';

const initialState = {
  favorities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITIES_SHOWS:
      console.log(action.payload)
      return {
        ...state,
        favorities: { ...state.favorities, ...action.payload }
      };
    default:
      return state;
  }
};

export const Creators = {
  addFavoriteShow: (shows) => ({
    type: FAVORITIES_SHOWS,
    payload: shows,
  }),
};

export default reducer;
