import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./redux/reducers/reducer";
import thunk from "redux-thunk";

export const initializeStore = () =>
  createStore(
    combineReducers({
      usersReducer,
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );
