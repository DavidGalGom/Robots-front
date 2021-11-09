import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/RobotList" element={<RobotList />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
