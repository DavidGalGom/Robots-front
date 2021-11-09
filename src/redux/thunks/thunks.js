import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  loadRobotsAction,
  createRobotAction,
  deleteRobotAction,
  loginUserAction,
} from "../actions/actionCreators";

const URLApi = process.env.REACT_APP_API_URL;
const URLUser = "https://robots-api-bb8.herokuapp.com/users";
//const URLlocal = "http://localhost:4040/users";

export const loadRobotsThunk = () => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const response = await axios.get(URLApi, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const robots = response.data;
  dispatch(loadRobotsAction(robots));
};
export const createRobotThunk = (robot) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  const { data: newRobot } = await axios.post(URLApi + "/create", robot, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(createRobotAction(newRobot));
};

export const deleteRobotThunk = (idRobot) => async (dispatch) => {
  const { token } = JSON.parse(localStorage.getItem("user"));
  await axios.delete(`${URLApi}/delete/${idRobot}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  dispatch(deleteRobotAction(idRobot));
};

export const loginUserThunk = (user) => async (dispatch) => {
  const response = await axios.post(`${URLUser}`, user);

  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(loginUserAction(user));
    localStorage.setItem("user", JSON.stringify({ token: token }));
  }
};
