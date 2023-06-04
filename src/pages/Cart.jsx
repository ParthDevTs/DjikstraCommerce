import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
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
    updateCartItem,
    cartValue,
  } = useCart();
  const [dynamicCartValue, setDynamicCartValue] = useState(cartValue);

  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    getCart();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let interval = 10000;
    const endValue = cartProducts?.reduce(
      (totalValue, { price, qty }) => totalValue + price * qty,
      0
    );

    let startValue = dynamicCartValue;
    let duration = Math.floor(interval / endValue);
    let inc = 10000;

    if (startValue !== endValue) {
      let counter = setInterval(() => {
        if (Math.abs(startValue - endValue) % 10000 === 0) {
          inc = 10000;
        } else if (Math.abs(startValue - endValue) % 1000 === 0) {
          inc = 1000;
        } else if (Math.abs(startValue - endValue) % 100 === 0) {
          inc = 100;
        } else if (Math.abs(startValue - endValue) % 10 === 0) {
          inc = 10;
        } else if (Math.abs(startValue - endValue) % 1 === 0) {
          inc = 1;
        }

        if (startValue < endValue) {
          startValue += inc;
        } else {
          startValue -= inc;
        }

        setDynamicCartValue(startValue);
        if (startValue === endValue) {
          clearInterval(counter);
        }
      }, duration);
    }

    // eslint-disable-next-line
  }, [cartProducts]);
  const navigate = useNavigate();

  return (
    <div className="cartPage">
      <div className="mainWindow">
        <div className="total">
          <h2>Total Amount</h2>
          <p className="totalValue numbers">
            {`Rs.
            ${dynamicCartValue ?? 0}`}
            {/* {`Rs.
            ${
              cartProducts?.reduce(
                (totalValue, { price, qty }) => totalValue + price * qty,
                0
              ) ?? 0
            }`} */}
          </p>
          <div className="actionItems">
            <button
              className="buyNowButton btn"
              onClick={() => navigate("/summary")}
              disabled={cartProducts.length < 1}
            >
              CheckOut
            </button>

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
            {cartProducts?.map((product) => {
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
                  <img
                    onClick={() => navigate(`/productList/${_id}`)}
                    src={imgUrl}
                    alt="phoneImg"
                  />
                  <div className="content">
                    <h3 onClick={() => navigate(`/productList/${_id}`)}>
                      {name}
                    </h3>
                    <div className="quantity">
                      <p className="numbers">
                        QTY:{" "}
                        <span
                          style={{
                            padding: "0 0.5rem 0 0.5rem",
                            background: "black",
                            color: "white",
                            borderRadius: "5px",
                          }}
                        >
                          {qty}
                        </span>
                      </p>
                      <div className="qtybtnrow">
                        <button
                          className="qtyBtninc"
                          onClick={() => updateCartItem(product, "increment")}
                        >
                          {" "}
                          +1
                        </button>
                        <button
                          className="qtyBtndec"
                          onClick={() => updateCartItem(product, "decrement")}
                          disabled={qty > 1 ? false : true}
                        >
                          -1
                        </button>
                      </div>
                    </div>

                    <div className="pricing numbers">Rs.{price}</div>
                  </div>
                  <div className="specs">{details}</div>
                  <div className="Link">
                    <Link className="infoLink" to={`/productList/${_id}`}>
                      Product Info
                    </Link>
                  </div>
                  {/* <div className="pricing numbers">Rs.{price}</div> */}
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
