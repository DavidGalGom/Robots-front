import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobot;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobot = [...action.robots];
      break;
    default:
      newRobot = robots;
  }
  return newRobot;
};

export default robotReducer;
