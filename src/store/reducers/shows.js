import { FAVORITIES_SHOWS } from '../actions/types';

const initialState = {
  favorities: [],
  //{"ended": "2015-09-10", "genres": ["Drama", "Science-Fiction", "Thriller"], "id": 1, "image": {"medium": "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg", "original": "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"}, "name": "Under the Dome", "premiered": "2013-06-24", "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>"}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITIES_SHOWS:
      if (!state.favorities.find((show) => show.id === action.payload.id)) {
        return {
          ...state,
          favorities: state.favorities.concat(action.payload),
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      console.log('DEFAULT REDUCER');
      return state;
  }
};

export const Creators = {
  addFavoriteShow: (show) => {
    return {
      type: FAVORITIES_SHOWS,
      payload: show,
    };
  },
};

export default reducer;
