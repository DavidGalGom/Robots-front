import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "./mocks/server";
import configureStore from "./redux/store";
import App from "./App";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given a App component", () => {
  describe("When render and there is some robot in the database", () => {
    test("Then it should render a robot card", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const [robot] = await screen.findAllByRole("listitem");

      expect(robot).toBeInTheDocument();
    });
  });
});
