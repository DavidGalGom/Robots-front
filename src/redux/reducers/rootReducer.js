import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

const rootReducer = combineReducers({
  toDo: robotReducer,
});

export default rootReducer;
