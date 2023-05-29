import { useCart } from "../context/CartContext";
import { useAuthContext } from "../context/authContext";
import "./styles/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { cartProducts, wishListCounter } = useCart();
  const { isLoggedIn } = useAuthContext();

  const itemsNum = cartProducts.reduce((total, curr) => total + curr.qty, 0);

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
          <span>Commerce</span>
        </span>
        <div className="spacer"></div>
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
          <span className="numbers navCartNum">{wishListCounter}</span>
        </NavLink>
        <NavLink style={getActiveStyle} className="navLink cartBtn" to="/cart">
          {" "}
          <span className="icons">&#128722;</span>
          <span className="numbers navCartNum">{itemsNum}</span>
        </NavLink>
      </div>
    </nav>
  );
};
