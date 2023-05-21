import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  return (
    <nav className="navStyle">
      <div className="navContent">
        <span className="logo">
          Djikstra
          <span>Commerce</span>
        </span>
        <div className="spacer"></div>
        {/* <NavLink className="navLink" style={getActiveStyle} to="/">
          Home
        </NavLink> */}
        <NavLink className="navLink" style={getActiveStyle} to="/productList">
          Login
        </NavLink>
        <NavLink className="navLink" style={getActiveStyle} to="/wishlist">
          <span className="icons">&#10084;</span>
          <span className="numbers navCartNum"></span>
        </NavLink>
        <NavLink style={getActiveStyle} className="navLink cartBtn" to="/cart">
          {" "}
          <span className="icons">&#128722;</span>
          <span className="numbers navCartNum"></span>
        </NavLink>
      </div>
    </nav>
  );
};
