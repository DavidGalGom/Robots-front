import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  logoutUserAction,
  userIsLoggedAction,
} from "../redux/actions/actionCreators";
import {
  loadRobotsThunk,
  createRobotThunk,
  deleteRobotThunk,
  loginUserThunk,
} from "../redux/thunks/thunks";

const useRobots = () => {
  const robots = useSelector((store) => store.robots);
  const dispatch = useDispatch();
  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(
    (robot) => {
      dispatch(createRobotThunk(robot));
    },
    [dispatch]
  );

  const deleteRobot = useCallback(
    (idRobot) => {
      dispatch(deleteRobotThunk(idRobot));
    },
    [dispatch]
  );

  const loginUser = (user) => {
    dispatch(loginUserThunk(user));
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserAction());
  };

  const userIsLogged = useCallback(() => {
    const userIsLogged = JSON.parse(localStorage.getItem("user"));

    if (userIsLogged) {
      const userData = jwtDecode(userIsLogged.token);
      dispatch(userIsLoggedAction(userData));
    }
  }, [dispatch]);

  return {
    robots,
    loadRobots,
    createRobot,
    deleteRobot,
    loginUser,
    logoutUser,
    userIsLogged,
  };
};

export default useRobots;
