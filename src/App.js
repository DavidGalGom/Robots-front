import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header/Header";

import RobotList from "./pages/RobotList/RobotList";
import Login from "./pages/Login/Login";
import Logout from "./pages/Logout/Logout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Router>
        <h1>Robots: FIRST Full stack App</h1>
        <Header />
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/RobotList" exact>
            <RobotList />
          </Route>
          <Route path="/Logout" exact>
            <Logout />
          </Route>
          <Route path="/" exact>
            <Redirect to="/RobotList" />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
