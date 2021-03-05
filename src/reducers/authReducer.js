import * as authActions from "../actions/authActions";

const INITIAL_STATE = {
  loggedIn: false,
  registerd: false,
  data: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActions.LOGIN:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        data: action.payload.data,
      };

    case authActions.REGISTER:
      return {
        ...state,
        registerd: action.payload.registered,
        loggedIn: action.payload.loggedIn,
      };

    case authActions.LOGOUT:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        data: action.payload.data,
      };

    default:
      return state;
  }
};

export default authReducer;
