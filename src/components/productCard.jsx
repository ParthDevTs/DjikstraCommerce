import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export const ProductCard = ({ item }) => {
  const { updateCart, addToWishlist, wishlist, removeFromWishlist } = useCart();
  const { id, name, price, category, imgUrl } = item;
  const [addToCart, setAddToCart] = useState("Add To Cart");

  let disabledWishlist =
    wishlist.find((product) => product.id === item.id) !== undefined;

  const togglewishlist = () => {
    !disabledWishlist ? addToWishlist(item) : removeFromWishlist(item);
  };

  const addToCartHandler = () => {
    setAddToCart("Added ✓");
    updateCart(item);
    const timer = setTimeout(() => {
      setAddToCart("Add To Cart");
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <li className="productListItem">
      <img className="productListImg" src={imgUrl} alt="phoneImage" />
      <h3>{name}</h3>
      <div className="content">
        <span
          className="numbers"
          style={{ fontWeight: "bold", fontSize: "1rem" }}
        >{`Rs. ${price}`}</span>
        <span style={{ color: "#2874f0", fontSize: "0.8rem" }}>{category}</span>
        <Link className="infoLink" to={`/productList/${id}`}>
          &#9432; more info
        </Link>
      </div>
      <footer>
        <button onClick={addToCartHandler} className="addToCartBtn btn">
          {addToCart}
        </button>
        <button
          style={{
            background: disabledWishlist ? "red" : null,
            color: disabledWishlist ? "white" : null,
          }}
          onClick={togglewishlist}
          className="wishListBtn btn"
        >
          {!disabledWishlist ? "Wish List" : "Wishlisted"}
        </button>
      </footer>
    </li>
  );
};
