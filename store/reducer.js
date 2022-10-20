import { combineReducers } from "redux";
import counter from "./counter/reducer";
import network from "./network/reducer";

const rootReducer = combineReducers({
  counter,
  network,
});

export default rootReducer;
