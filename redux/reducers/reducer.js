import { FETCH_USERS, FETCH_REPO } from "../types/types";

const defaultState = {
  users: [],
  repos: [],
};

const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.data,
      };
    case FETCH_REPO:
      return {
        ...state,
        repos: action.data,
      };
    default:
      return state;
  }
};

export default usersReducer;
