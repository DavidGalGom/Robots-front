import actionTypes from "./actionTypes";

export const loadRobotsAction = (robots) => ({
  type: actionTypes.loadRobots,
  robots,
});

export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});

export const deleteRobotAction = (id) => ({
  type: actionTypes.deleteRobot,
  id,
});

export const loginUserAction = (user) => ({
  type: actionTypes.loginUser,
  user,
});

export const logoutUserAction = () => ({
  type: actionTypes.logoutUser,
});

export const userIsLoggedAction = (user) => ({
  type: actionTypes.userIsLogged,
  user,
});
