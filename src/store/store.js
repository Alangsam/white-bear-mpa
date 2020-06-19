import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducer from "./combineReducers";

const initialState = {
   user: {},
   queuedCards: [],
   indexOfCurrentCard: 0,
};

const store = createStore(combineReducer, initialState, composeWithDevTools());

export default store;
