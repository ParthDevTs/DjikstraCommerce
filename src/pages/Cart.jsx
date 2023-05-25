import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./css files/cart.css";

export const Cart = () => {
  const {
    cartProducts,
    addToWishlist,
    removeFromCart,
    wishlist,
    removeFromWishlist,
  } = useCart();

  return (
    <div className="cartPage">
      <div className="mainWindow">
        <div className="total">
          <h2>Total Amount</h2>
          <p className="totalValue numbers">
            {`Rs.
            ${cartProducts.reduce(
              (totalValue, { price, quantity }) =>
                totalValue + price * quantity,
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
            {cartProducts.map((product) => {
              const { id, name, price, quantity, imgUrl, details } = product;
              let disabledWishlist =
                wishlist.find((item) => item.id === product.id) !== undefined;
              const togglewishlist = () => {
                !disabledWishlist
                  ? addToWishlist(product)
                  : removeFromWishlist(product);
              };
              return (
                <li className="cartProduct" key={id}>
                  <img src={imgUrl} alt="phoneImg" />
                  <div className="content">
                    <h3>{name}</h3>
                    <p className="numbers">QTY: {quantity}</p>
                  </div>
                  <div className="specs">{details}</div>
                  <div className="Link">
                    <Link className="infoLink" to={`/productList/${id}`}>
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
