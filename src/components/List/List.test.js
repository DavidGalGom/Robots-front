import { render, screen } from "@testing-library/react";
import { getRandomRobots } from "../../factories/robotFactory";
import List from "./List";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const robots = getRandomRobots();

describe("Given a List component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <List robots={robots} />
        </Provider>
      );

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });
});
