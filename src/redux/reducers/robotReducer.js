import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobot;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobot = [...action.robots];
      break;
    case actionTypes.createRobot:
      newRobot = [...robots, action.robot];
      break;
    case actionTypes.deleteRobot:
      newRobot = robots.filter((robot) => robot.id !== action.id);
      break;
    default:
      newRobot = robots;
  }
  return newRobot;
};

export default robotReducer;
