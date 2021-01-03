import { applyMiddleware, createStore, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const createRootReducer = (history) => combineReducers({
  routing: connectRouter(history)
})

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  createRootReducer(history),
  applyMiddleware(...middlewares)
);

export default store;