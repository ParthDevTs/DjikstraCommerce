import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./styles/productCard.css";
import { useAuthContext } from "../context/authContext";
import { FormattedNum } from "./formattedNum";

export const ProductCard = ({ item }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();
  const { _id, name, price, category, imgUrl, salePrice } = item;
  const [addToCartLabel, setAddToCartLabel] = useState("Add To Cart");
  const [errorMessage, setErrorMessage] = useState(false);
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  let disabledWishlist =
    wishlist?.find((product) => product._id === item._id) !== undefined;

  const togglewishlist = () => {
    if (!isLoggedIn) {
      setErrorMessage(true);
    } else {
      !disabledWishlist ? addToWishlist(item) : removeFromWishlist(item);
    }
  };

  const addToCartHandler = () => {
    if (!isLoggedIn) {
      setErrorMessage(true);
    } else {
      setAddToCartLabel("Added ✓");
      addToCart(item);
      const timer = setTimeout(() => {
        setAddToCartLabel("Add To Cart");
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <li className="productListItem">
      <img
        onClick={() => navigate(`/productList/${_id}`)}
        className="productListImg"
        src={imgUrl}
        alt="phoneImage"
        style={{ cursor: "pointer" }}
      />
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/productList/${_id}`)}
      >
        {name}
      </h3>
      <div className="content">
        <span className="numbers" style={{ fontWeight: "bold" }}>
          <FormattedNum num={price} />
        </span>
        <span style={{ color: "#2874f0" }}>{category}</span>
      </div>
      <div className="newLaunch">{item.newLaunch ? "New Launch" : ""}</div>
      <footer>
        <button
          onClick={!errorMessage ? addToCartHandler : navigate("/login")}
          className="addToCartBtn btn"
        >
          {addToCartLabel}
        </button>
        <button
          style={{
            background: disabledWishlist ? "red" : null,
            color: disabledWishlist ? "white" : null,
          }}
          onClick={!errorMessage ? togglewishlist : navigate("/login")}
          className="wishListBtn btn"
        >
          {!disabledWishlist ? "Wish List" : "Wishlisted"}
        </button>
        {errorMessage && <p className="error__message">Login To Continue</p>}
      </footer>
      {salePrice && <div className="sale__badge">Sale</div>}
    </li>
  );
};
