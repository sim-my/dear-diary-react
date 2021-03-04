import * as postActions from "../actions/postActions";

const INITIAL_STATE = {
  post: {},
  isLoading: true,
  list: [],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case postActions.DISPLAY_LIST:
      return {
        ...state,
        post: action.payload.post,
        list: action.payload.list,
        isLoading: action.payload.isLoading,
      };
    case postActions.DISPLAY_SINGLE_POST:
      return {
        ...state,
        post: action.payload.post,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
};

export default postReducer;
