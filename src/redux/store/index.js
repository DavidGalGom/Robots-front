import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
