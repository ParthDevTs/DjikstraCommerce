import { useAuthContext } from "../context/authContext";
import "./css files/login.css";
import person from "../assets/personImage.png";

export const Login = () => {
  const { logOut, logon } = useAuthContext();
  const loginHandler = () => {
    logon();
  };
  return (
    <div className="loginForm">
      <form action="">
        <div className="imgcontainer">
          <img src={person} alt="Avatar" className="avatar" />
        </div>
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            defaultValue={"abc123"}
          />
          <button onClick={loginHandler}>Login</button>
        </div>
        <div className="container">
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>

      <button
        onClick={() => {
          logOut();
        }}
      >
        logOut
      </button>
    </div>
  );
};
