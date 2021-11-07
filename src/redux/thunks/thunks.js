import { loadRobotsAction, createRobotAction } from "../actions/actionCreators";

const URLApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(URLApi);
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const createRobotThunk = (toAddRobot) => {
  return async (dispatch) => {
    const response = await fetch(URLApi, {
      method: "POST",
      body: JSON.stringify(toAddRobot),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  };
};
