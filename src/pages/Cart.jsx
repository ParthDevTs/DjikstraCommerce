import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import "./css files/cart.css";

export const Cart = () => {
  const {
    cartProducts,
    addToWishlist,
    removeFromCart,
    wishlist,
    removeFromWishlist,
    getCart,
    showLoader,
  } = useCart();
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    getCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="cartPage">
      <div className="mainWindow">
        <div className="total">
          <h2>Total Amount</h2>
          <p className="totalValue numbers">
            {`Rs.
            ${cartProducts.reduce(
              (totalValue, { price, qty }) => totalValue + price * qty,
              0
            )}`}
          </p>
          <div className="actionItems">
            <button className="buyNowButton btn">Buy Now</button>

            <Link className="wishlistbtn btn " to="/wishlist">
              <button className=" wishlistLink">Go To Wishlist</button>
            </Link>
          </div>
        </div>
        <div>
          <ul className="cartList">
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
            {cartProducts.map((product) => {
              const { _id, name, price, qty, imgUrl, details } = product;
              let disabledWishlist =
                wishlist.find((item) => item.id === product.id) !== undefined;
              const togglewishlist = () => {
                !disabledWishlist
                  ? addToWishlist(product)
                  : removeFromWishlist(product);
              };
              return (
                <li className="cartProduct" key={_id}>
                  <img src={imgUrl} alt="phoneImg" />
                  <div className="content">
                    <h3>{name}</h3>
                    <p className="numbers">QTY: {qty}</p>
                  </div>
                  <div className="specs">{details}</div>
                  <div className="Link">
                    <Link className="infoLink" to={`/productList/${_id}`}>
                      Product Info
                    </Link>
                  </div>
                  <div className="pricing numbers">Rs.{price}</div>
                  <div className="actionButton">
                    <button
                      onClick={() => removeFromCart(product)}
                      className="deletItem"
                    >
                      🗑
                    </button>
                    <button
                      onClick={togglewishlist}
                      className="moveToWishlist"
                      style={{
                        background: disabledWishlist ? "transparent" : null,
                        color: disabledWishlist ? "red" : null,
                      }}
                    >
                      &#10084;
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
