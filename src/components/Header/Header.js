const Header = () => {
  return (
    <ul className="header">
      <li>
        <link to="/Login">Login</link>
      </li>
      <li>
        <link to="/RobotsList">List of Robots</link>
      </li>
      <li>
        <link to="/Logout">Logout</link>
      </li>
    </ul>
  );
};

export default Header;
