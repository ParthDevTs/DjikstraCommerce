import { useCart } from "../context/CartContext";
import { useAuthContext } from "../context/authContext";
import "./styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { cartProducts, wishListCounter, setNavbarSearchItem } = useCart();
  const { isLoggedIn } = useAuthContext();

  const itemsNum = cartProducts?.reduce((total, curr) => total + curr.qty, 0);

  const navigate = useNavigate();
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  return (
    <nav className="navStyle">
      <div className="navContent">
        <span
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          className="logo"
        >
          Djikstra
          <span style={{ color: "#658df2" }}>Express</span>
        </span>
        <div className="spacer"></div>
        <input
          placeholder="Search Item"
          className="nav__textinput navLink"
          type="text"
          onClick={() => navigate("/productList")}
          onChange={(event) => setNavbarSearchItem(event.target.value)}
        />

        <NavLink
          className="navLink mainBar"
          style={getActiveStyle}
          to="/productList"
        >
          All Products
        </NavLink>
        <NavLink
          className="navLink mainBar"
          style={getActiveStyle}
          to="/wishlist"
        >
          <span className="icons">&#10084;</span>
          <span
            style={{ display: wishListCounter > 0 ? "" : "none" }}
            className="numbers navCartNum"
          >
            {wishListCounter ? wishListCounter : 0}
          </span>
        </NavLink>
        <NavLink
          style={getActiveStyle}
          className="navLink cartBtn mainBar"
          to="/cart"
        >
          {" "}
          <span className="icons">&#128722;</span>
          <span
            style={{ display: itemsNum > 0 ? "" : "none" }}
            className="numbers navCartNum"
          >
            {itemsNum ? itemsNum : 0}
          </span>
        </NavLink>
        {!isLoggedIn && (
          <NavLink
            className="navLink mainBar"
            style={getActiveStyle}
            to="/login"
          >
            Login
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink
            className="navLink mainBar"
            style={getActiveStyle}
            to="/login"
          >
            logOut
          </NavLink>
        )}

        <div className="lowerbar">
          {!isLoggedIn && (
            <NavLink className="navLink" style={getActiveStyle} to="/login">
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink className="navLink" style={getActiveStyle} to="/login">
              logOut
            </NavLink>
          )}

          <NavLink className="navLink" style={getActiveStyle} to="/productList">
            All Products
          </NavLink>
          <NavLink className="navLink" style={getActiveStyle} to="/wishlist">
            <span className="icons">&#10084;</span>

            <span
              style={{ display: wishListCounter > 0 ? "" : "none" }}
              className="numbers navCartNum"
            >
              {wishListCounter ? wishListCounter : 0}
            </span>
          </NavLink>
          <NavLink
            style={getActiveStyle}
            className="navLink cartBtn"
            to="/cart"
          >
            {" "}
            <span className="icons">&#128722;</span>
            <span
              style={{ display: itemsNum > 0 ? "" : "none" }}
              className="numbers navCartNum"
            >
              {itemsNum ? itemsNum : 0}
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
