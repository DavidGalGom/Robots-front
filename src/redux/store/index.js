import { applyMiddleware, combineReducers, createStore } from "redux";
import robotReducer from "../reducers/robotReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({ robots: robotReducer });

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
