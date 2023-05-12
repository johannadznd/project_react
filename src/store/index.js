import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { loadState } from "./localStorage";
import { createBrowserHistory } from "history";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk'
import { routerMiddleware } from "react-router-redux";

const persistedStore = loadState();
export const history = createBrowserHistory();
export default createStore(
  rootReducer,
  persistedStore,
  applyMiddleware(routerMiddleware(history),thunk, logger)
);
