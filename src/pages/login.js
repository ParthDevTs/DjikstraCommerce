import { useAuthContext } from "../context/authContext";
import "./css files/login.css";
import person from "../assets/personImage.png";

export const Login = () => {
  const { logOut, logon, isLoggedIn } = useAuthContext();
  const loginHandler = () => {
    logon();
  };
  return (
    <div className="loginForm">
      <div className="loginSection">
        {!isLoggedIn && (
          <form action={loginHandler}>
            <div className="imgcontainer">
              <img src={person} alt="Avatar" className="avatar" />
            </div>
            <div className="container">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
                defaultValue={"abc@gmail.com"}
              />
              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
                defaultValue={"abc"}
              />
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
        )}
        {!isLoggedIn && <button onClick={loginHandler}>Login &#x2192; </button>}
        {isLoggedIn && (
          <button
            onClick={() => {
              logOut();
            }}
          >
            logOut
          </button>
        )}
      </div>
      <div className="addressSection">
        <div className="addressBox">
          <h1>Addresses</h1>
          {!isLoggedIn && <p>Login To see Addresses</p>}
        </div>
      </div>
    </div>
  );
};
