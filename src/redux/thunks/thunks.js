import { loadRobotsAction } from "../actions/actionCreators";

const URLApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(URLApi);
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};
