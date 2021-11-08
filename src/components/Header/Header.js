import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul className="header">
      <li>
        <Link to="/Login">Login</Link>
      </li>
      <li>
        <Link to="/RobotList">List of Robots</Link>
      </li>
      <li>
        <Link to="/Logout">Logout</Link>
      </li>
    </ul>
  );
};

export default Header;
