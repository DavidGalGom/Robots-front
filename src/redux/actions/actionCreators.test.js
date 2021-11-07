import { getRandomRobot, getRandomRobots } from "../../factories/robotFactory";
import {
  loadRobotsAction,
  createRobotAction,
  deleteRobotAction,
} from "./actionCreators";
import actionTypes from "./actionTypes";

describe("Given a component actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a load type action with the robot received", () => {
      const robotsList = getRandomRobots();
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const actionResult = loadRobotsAction(robotsList);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a create actionCreator", () => {
  describe("When it receives a Task", () => {
    test("Then it should return a create type action with the Task received", () => {
      const newRobot = getRandomRobot();
      const expectedAction = {
        type: actionTypes.createRobot,
        robot: newRobot,
      };

      const actionResult = createRobotAction(newRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });

  describe("Given a delete actionCreator", () => {
    describe("When it receives an id", () => {
      test("Then it should return a delete type action with the id received", () => {
        const idRobot = 0;
        const expectedAction = {
          type: actionTypes.deleteRobot,
          idRobot,
        };

        const actionResult = deleteRobotAction(idRobot);

        expect(actionResult).toEqual(expectedAction);
      });
    });
  });
});
