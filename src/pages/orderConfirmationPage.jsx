import "./css files/orderconfirmation.css";
import Lottie from "lottie-react";
import shopping from "../assets/shopping.json";
import { useNavigate } from "react-router-dom";

export const OrderConfirmation = () => {
  const navigate = useNavigate();
  return (
    <div className="checkOutPage">
      <div className="summary">
        <div className="animationSide">
          <Lottie animationData={shopping} loop={true} />
        </div>
        <div className="orderSummary">
          <h1 className="gradient_background">Order Successful!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi
            corrupti expedita amet ea et velit similique debitis, voluptatum
            adipisci dolore quibusdam ducimus at ratione veniam quaerat illum
            ipsa nihil!
          </p>
          <button
            className="fancyButton"
            onClick={() => navigate("/productList")}
          >
            Keep Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
