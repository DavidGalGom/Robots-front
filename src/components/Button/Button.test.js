import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a click", () => {
    test("Then it should summon the actionOnClick function", () => {
      const actionOnClick = jest.fn();

      render(<Button actionOnClick={actionOnClick} />);
      const clickElement = screen.getByRole("button");
      userEvent.click(clickElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
  describe("When it receives a value", () => {
    test("Then it should render it", () => {
      const textButton = "Back";

      render(<Button value={textButton} />);
      const textElement = screen.getByRole("button", { name: "Back" });
      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When it receives a className value", () => {
    test("Then it should be a button with this className in the document", () => {
      const classNameButton = "go-back-button";

      render(<Button className={classNameButton} />);
      const classNameElement = screen.getByRole("button", {
        class: "go-back-button",
      });

      expect(classNameElement).toHaveClass("go-back-button");
    });
  });
});
