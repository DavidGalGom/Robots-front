import { useEffect, useState } from "react";

const Login = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const initialData = {
    userName: "",
    password: "",
  };
  const [userData, setUserData] = useState(initialData);

  const changeData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };
  const resetForm = () => {
    setUserData(initialData);
  };
  useEffect(() => {
    setButtonDisabled(userData.userName === "" || userData.password === "");
  }, [userData]);

  const onSubmit = (event) => {
    event.preventDefault();
    resetForm();
  };
  return (
    <>
      <h2>Login</h2>
      <div className="login-formulary">
        <form onSubmit={onSubmit} autoComplete="off" noValidate>
          <div className="form-group">
            <label htmlFor="userName">User name:</label>
            <input
              placeholder="Enter the user name"
              type="text"
              value={userData.userName}
              className="form-control"
              id="userName"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Enter the password"
              type="password"
              value={userData.password}
              className="form-control"
              id="password"
              onChange={changeData}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-info"
              disabled={buttonDisabled}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
