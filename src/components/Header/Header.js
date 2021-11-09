import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const isAuth = useSelector((store) => store.user.isAuthenticated);
  if (isAuth === true) {
    return (
      <ul className="header">
        <li>
          <Link to="/RobotList">List of Robots</Link>
        </li>
        <li>
          <Link to="/Logout">Logout</Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="header">
        <li>
          <Link to="/Login">Login</Link>
        </li>
      </ul>
    );
  }
};

export default Header;
