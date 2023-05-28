import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Dna } from "react-loader-spinner";
import "./css files/productDetails.css";
import { useAuthContext } from "../context/authContext";

export const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const { productId } = useParams();
  const { isLoggedIn } = useAuthContext();
  const { addToWishlist, updateCart, wishlist, removeFromWishlist } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      setShowLoader(true);
      await fetch(`/api/products/${productId}`)
        .then(async (res) => await res.json())
        .then(async (data) => setProduct(await data.product))
        .catch((e) => console.error(e));
      setShowLoader(false);
    };
    getProduct();
  }, []);

  const [addtocart, setAddToCart] = useState("Add To Cart");

  const { name, price, category, details, imgUrl, memory } = product;

  let disabledWishlist =
    wishlist.find((item) => product._id === item._id) !== undefined;

  const wishlistHandler = () => {
    !disabledWishlist ? addToWishlist(product) : removeFromWishlist(product);
  };

  const addToCartHandler = () => {
    setAddToCart("Added ✓");
    updateCart(product);
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
            <h2>
              Memory: <span style={{ color: "#2874f0" }}>{memory}Gb</span>
            </h2>
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
      )}
    </div>
  );
};
