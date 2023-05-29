import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import { Dna } from "react-loader-spinner";
import "./css files/productDetails.css";
import { useAuthContext } from "../context/authContext";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const { productId } = useParams();
  const { isLoggedIn } = useAuthContext();
  const { addToWishlist, addToCart, wishlist, removeFromWishlist } = useCart();
  // eslint-disable-next-line
  useEffect(() => {
    const getProduct = async () => {
      setShowLoader(true);
      await fetch(`/api/products/${productId}`)
        .then(async (res) => await res.json())
        .then(async (data) => setProduct(await data.product))
        .catch((e) => console.error(e));
      setShowLoader(false);
    };
    // eslint-disable-next-line
    getProduct();
    // eslint-disable-next-line
  }, []);

  const [addtocart, setAddToCart] = useState("Add To Cart");

  const { name, price, category, details, imgUrl, memory } = product;

  let disabledWishlist =
    wishlist?.find((item) => product._id === item._id) !== undefined;

  const wishlistHandler = async () => {
    !disabledWishlist
      ? await addToWishlist(product)
      : await removeFromWishlist(product);
  };

  const addToCartHandler = async () => {
    setAddToCart("Added ✓");
    await addToCart(product);
    const timer = setTimeout(() => {
      setAddToCart("Add To Cart");
    }, 1000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="productDetailPage">
      {showLoader && (
        <div className="spinner-box">
          <Dna
            className="spinner"
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {!showLoader && (
        <div className="productDetailMainWindow">
          <div className="imageWindow">
            <img className="prodimage" src={imgUrl} alt="productImg" />
          </div>
          <div className="detailsWindow">
            <h1>{name}</h1>
            <h2 className="numbers">Rs. {price}</h2>
            <h3>Category: {category}</h3>
            {!memory === null ? (
              <h2>
                Memory: <span style={{ color: "#2874f0" }}>{memory}Gb</span>
              </h2>
            ) : null}
            <p>{details}</p>
            <div className="actionButton">
              <button
                onClick={addToCartHandler}
                className="addToCartBtn prodAddToCart  btn"
                disabled={isLoggedIn}
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
                disabled={isLoggedIn}
              >
                {!disabledWishlist ? "Wish List" : "Wishlisted"}
              </button>
              <button
                onClick={() => navigate("/productList")}
                className="allProdBtn prodAddToCart btn"
              >
                All Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
