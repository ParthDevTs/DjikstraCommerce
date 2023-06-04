import { useAuthContext } from "../context/authContext";
import "./css files/login.css";
import person from "../assets/personImage.png";
import { useCart } from "../context/CartContext";

export const Login = () => {
  const { logOut, logon, isLoggedIn } = useAuthContext();
  const { address } = useCart();

  const loginHandler = () => {
    logon();
  };
  return (
    <div className="loginForm">
      <div className="loginSection">
        {!isLoggedIn && (
          <form>
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
              {/* <button type="button" className="button cancelbtn ">
                Cancel
              </button> */}
            </div>
          </form>
        )}
        {!isLoggedIn && (
          <button className="button" onClick={loginHandler}>
            Login &#x2192;{" "}
          </button>
        )}
        {isLoggedIn && (
          <button
            className="button"
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
          <h1 className="addressHeading">Addresses</h1>
          {!isLoggedIn && <h3>Login To Continue</h3>}

          {isLoggedIn &&
            address.map((address) => {
              const {
                id,
                type,
                addressLine1,
                addressLine2,
                city,
                state,
                isDefault,
                pincode,
              } = address;
              return (
                <li className="adddressItem" key={id}>
                  <h3 className="type">{type}</h3>
                  <p className="addressline add">
                    <b>{addressLine1}</b>
                  </p>
                  <p className="addressline add">
                    <b>{addressLine2}</b>
                  </p>
                  <p className="city add">
                    <b>City:</b> {city}
                  </p>
                  <p className="city add">
                    <b>State:</b> {state}
                  </p>
                  <p className="pincode add">
                    <b>Pincode:</b> {pincode}
                  </p>
                  {isDefault && <div className="defaultAdd">Default</div>}
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};
