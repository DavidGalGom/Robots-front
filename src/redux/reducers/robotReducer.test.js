import { getRandomRobots, getRandomRobot } from "../../factories/robotFactory";
import actionTypes from "../actions/actionTypes";
import robotReducer from "./robotReducer";

describe("Given a robotReducer", () => {
  describe("When it receives an empty robots list and a load action with 5 tasks", () => {
    test("Then it should return a new robots list with the  robots received", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(5);
      const action = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const newList = robotReducer(initialRobots, action);

      expect(newList).toEqual(robotsList);
    });
  });
});

describe("When it receives a new robot", () => {
  test("Then it should return the robots list with the new robot inside", () => {
    const initialRobots = getRandomRobots(5);
    const newRobot = getRandomRobot();
    const action = {
      type: actionTypes.createRobot,
      robot: newRobot,
    };

    const newRobotList = robotReducer(initialRobots, action);

    expect(newRobotList).toContainEqual(newRobot);
  });
});
