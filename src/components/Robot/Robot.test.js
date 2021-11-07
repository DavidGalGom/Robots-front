import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getRandomRobot } from "../../factories/robotFactory";
import Robot from "./Robot";

describe("Given a Robot component", () => {
  describe("When it receives a Robot", () => {
    test("Then it should render their properties", () => {
      const robot = getRandomRobot();

      render(<Robot robot={robot} />);

      const robotName = screen.getByRole("list");
      const robotImage = screen.getByRole("list");
      const robotSpeed = screen.getByRole("list");
      const robotResistance = screen.getByRole("list");
      const robotCreationDate = screen.getByRole("list");

      expect(robotName).toBeInTheDocument();
      expect(robotImage).toBeInTheDocument();
      expect(robotSpeed).toBeInTheDocument();
      expect(robotResistance).toBeInTheDocument();
      expect(robotCreationDate).toBeInTheDocument();
    });
  });
});
