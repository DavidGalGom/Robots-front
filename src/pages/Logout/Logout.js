import logoutUser from "../../hook/useRobots";
import Button from "../../components/Button/Button";

const Logout = () => {
  const logOut = () => {
    localStorage.removeItem("user");

    logoutUser();
  };
  return (
    <>
      <h2>Logout</h2>
      <Button
        value="Log out"
        actionOnClick={logOut}
        className="red-button btn btn-danger"
      />
    </>
  );
};

export default Logout;
