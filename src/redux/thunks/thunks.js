import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loadRobotsAction,
  createRobotAction,
  deleteRobotAction,
  loginUserAction,
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

export const deleteRobotThunk = (idRobot) => {
  return async (dispatch) => {
    const response = await fetch(`${URLApi}/delete/${idRobot}`, {
      method: "DELETE",
    });
    await response.json();
    dispatch(deleteRobotAction(idRobot));
  };
};

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${URLApi}users`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
