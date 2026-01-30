import { combineReducers, createStore } from "redux";
import { countReducer } from "./reducers/count.reducer";
import { listReducer } from "./reducers/list.reducer";

const reducers = combineReducers({
  count: countReducer,
  list: listReducer,
});

export const globalState = createStore(reducers);
