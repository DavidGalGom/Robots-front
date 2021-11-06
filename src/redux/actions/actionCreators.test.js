import { getRandomRobots } from "../../factories/robotFactory";
import { loadRobotsAction } from "./actionCreators";
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
