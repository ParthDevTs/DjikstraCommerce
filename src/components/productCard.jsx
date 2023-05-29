import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./styles/productCard.css";
import { useAuthContext } from "../context/authContext";

export const ProductCard = ({ item }) => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();
  const { _id, name, price, category, imgUrl } = item;
  const [addToCartLabel, setAddToCartLabel] = useState("Add To Cart");
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  let disabledWishlist =
    wishlist?.find((product) => product._id === item._id) !== undefined;

  const togglewishlist = () => {
    !disabledWishlist ? addToWishlist(item) : removeFromWishlist(item);
  };

  const addToCartHandler = () => {
    setAddToCartLabel("Added ✓");
    addToCart(item);
    const timer = setTimeout(() => {
      setAddToCartLabel("Add To Cart");
    }, 1000);
    return () => clearTimeout(timer);
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
        <span
          className="numbers"
          style={{ fontWeight: "bold", fontSize: "1rem" }}
        >{`Rs. ${price}`}</span>
        <span style={{ color: "#2874f0", fontSize: "0.8rem" }}>{category}</span>
        <Link className="infoLink" to={`/productList/${_id}`}>
          &#9432; more info
        </Link>
      </div>
      <footer>
        <button
          onClick={addToCartHandler}
          className="addToCartBtn btn"
          disabled={!isLoggedIn}
        >
          {addToCartLabel}
        </button>
        <button
          style={{
            background: disabledWishlist ? "red" : null,
            color: disabledWishlist ? "white" : null,
          }}
          onClick={togglewishlist}
          className="wishListBtn btn"
          disabled={!isLoggedIn}
        >
          {!disabledWishlist ? "Wish List" : "Wishlisted"}
        </button>
      </footer>
    </li>
  );
};
