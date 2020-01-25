import { SET_CURRENT_USER, LOADING_USER } from "../types";

const INITIAL_STATE = {
  currentUser: null,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default userReducer;
