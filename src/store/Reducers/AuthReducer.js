import { LOGIN, AUTH_ERROR, AUTH_LOADING, LOGOUT } from "../types";

const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        error: "",
        loading: false,
      };

    case AUTH_LOADING:
      return { ...state, loading: action.payload };

    case AUTH_ERROR:
      return { ...state, error: action.payload, loading: false };

    case LOGOUT:
      return INITIAL_STATE;

    default:
      return INITIAL_STATE;
  }
};
