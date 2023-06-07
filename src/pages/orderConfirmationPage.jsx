import "./css files/orderconfirmation.css";
import Lottie from "lottie-react";
import shopping from "../assets/shopping.json";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { orderProducts } = useCart();
  const { orderedAddress, orderArray } = orderProducts;
  const { type, addressLine1, addressLine2, city, state, pincode } =
    orderedAddress;

  return (
    <div className="checkOutPage">
      <div className="summary">
        <div className="animationSide">
          <Lottie animationData={shopping} loop={true} />
        </div>
        <div className="orderSummary">
          <h1 className="main__slogan">Order Successful!</h1>{" "}
          <p
            style={{
              fontFamily: "montserrat",
              marginBottom: "0.5rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            Your order is one the way! <br />
            Our happiness agents are on the way to deliver your order.
          </p>
          {orderArray.length > 0 && (
            <div className="productInfo">
              <h3>Order Details</h3>
              <ul className="orderList">
                {orderArray.map((item) => {
                  return (
                    <li className="orderedProduct" key={item._id}>
                      <img src={item.imgUrl} alt={item.name} />
                      <p>
                        {item.name} <br /> x {item.qty}{" "}
                      </p>
                    </li>
                  );
                })}
              </ul>
              {orderArray.length > 0 && (
                <div className="orderedAddress">
                  <div className="adddressItem">
                    <h3 className="type">{type}</h3>
                    <p className="addressline add">
                      <b>{addressLine1}</b>
                    </p>
                    {addressLine2 && (
                      <p className="addressline add">
                        <b>{addressLine2}</b>
                      </p>
                    )}
                    <p className="city add">
                      <b>City:</b> {city}
                    </p>
                    <p className="city add">
                      <b>State:</b> {state}
                    </p>
                    <p className="pincode add">
                      <b>Pincode:</b> {pincode}
                    </p>
                  </div>
                </div>
              )}
              <button
                className="fancyButton"
                onClick={() => navigate("/productList")}
              >
                Keep Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
