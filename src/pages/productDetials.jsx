import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./css files/productDetails.css";

export const ProductDetails = () => {
  const { productId } = useParams();
  const {
    addToWishlist,
    updateCart,
    wishlist,
    removeFromWishlist,

    productList,
  } = useCart();
  const [addtocart, setAddToCart] = useState("Add To Cart");

  function getProductDetails(products, productId) {
    return products.find((product) => product.id === productId);
  }

  const product = getProductDetails(productList, productId);

  const { name, price, category, details, imgUrl, memory } = product;

  let disabledWishlist =
    wishlist.find((item) => product.id === item.id) !== undefined;

  const wishlistHandler = () => {
    !disabledWishlist ? addToWishlist(product) : removeFromWishlist(product);
  };

  const addToCartHandler = () => {
    setAddToCart("Added ✓");
    updateCart(product);
    const timer = setTimeout(() => {
      setAddToCart("Add To Cart");
      console.log("timeer");
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="productDetailPage">
      <div className="productDetailMainWindow">
        <div className="imageWindow">
          <img className="prodimage" src={imgUrl} alt="productImg" />
        </div>
        <div className="detailsWindow">
          <h1>{name}</h1>
          <h2 className="numbers">Rs. {price}</h2>
          <h3>Category: {category}</h3>
          <h2>
            Memory: <span style={{ color: "#2874f0" }}>{memory}Gb</span>
          </h2>
          <p>{details}</p>
          <div className="actionButton">
            <button
              onClick={addToCartHandler}
              className="addToCartBtn prodAddToCart  btn"
            >
              {addtocart}
            </button>
            <button
              style={{
                background: disabledWishlist ? "red" : null,
                color: disabledWishlist ? "white" : null,
              }}
              onClick={wishlistHandler}
              className="wishListBtn prodAddToCart btn"
            >
              {!disabledWishlist ? "Wish List" : "Wishlisted"}
            </button>
            <button className="allProdBtn prodAddToCart btn">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/productList"
              >
                All Products
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
