import {
  loadRobotsAction,
  createRobotAction,
  deleteRobotAction,
} from "../actions/actionCreators";

const URLApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const response = await fetch(URLApi);
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const response = await fetch(URLApi + "/create", {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newRobot = await response.json();
    dispatch(createRobotAction(newRobot));
  };
};

export const deleteRobotThunk = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${URLApi}/delete/${id}`, {
      method: "DELETE",
    });
    await response.json();
    dispatch(deleteRobotAction(id));
  };
};
