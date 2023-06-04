import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./css files/orderSummary.css";
import { useNavigate } from "react-router-dom";
export const OrderSummary = () => {
  const { address, cartValue, addAddress } = useCart();
  const [displayAddAddress, setDisplayAddAddress] = useState(false);
  const addressObj = {
    type: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    isDefault: false,
    pincode: "",
  };
  const [userAddress, setUserAddress] = useState(addressObj);
  const navigate = useNavigate();
  const addressHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUserAddress({ ...userAddress, [name]: value });
  };

  return (
    <div className="orderSummaryPage">
      {displayAddAddress && (
        <div className="addressPopout">
          <div className="add__address__page">
            <h3 className="gradient_background">Add A New Address</h3>
            <button
              onClick={() => setDisplayAddAddress(false)}
              className="closeAddress fancyButton"
            >
              close
            </button>

            <div className="formField">
              <p>Address Name</p>
              <input
                onChange={addressHandler}
                value={userAddress.type}
                type="text"
                name="type"
                id="type"
              />
            </div>
            <div className="formField">
              <p>Address Line 1</p>
              <input
                onChange={addressHandler}
                value={userAddress.addressLine1}
                type="text"
                name="addressLine1"
                id="addressLine1"
              />
            </div>
            <div className="formField">
              <p>Address Line 2</p>
              <input
                onChange={addressHandler}
                value={userAddress.addressLine2}
                type="text"
                name="addressLine2"
                id="addressLine2"
              />
            </div>
            <div className="formField">
              <p>City</p>
              <input
                onChange={addressHandler}
                value={userAddress.city}
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="formField">
              <p>State</p>
              <input
                onChange={addressHandler}
                value={userAddress.state}
                type="text"
                name="state"
                id="state"
              />
            </div>
            <div className="formField">
              <p>Pincode</p>
              <input
                onChange={addressHandler}
                value={userAddress.pincode}
                type="text"
                name="pincode"
                id="pincode"
              />
            </div>
            <footer>
              <button
                className="fancyButton"
                onClick={() => {
                  addAddress(userAddress);
                  setDisplayAddAddress(false);
                  setUserAddress(addressObj);
                }}
                disabled={userAddress.type.length === 0}
              >
                Save Address
              </button>
              <button
                className="fancyButton"
                onClick={() => setUserAddress(addressObj)}
              >
                Reset
              </button>
            </footer>
          </div>
        </div>
      )}
      <div className="orderSummary">
        <div className="addressList ">
          <h3 className="gradient_background">Saved Addresses</h3>
          <ul className="allAddresses">
            {address.map((address) => {
              const {
                id,
                type,
                addressLine1,
                addressLine2,
                city,
                state,
                isDefault,
                pincode,
              } = address;

              return (
                <li className="adddressItem" key={id}>
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
                  {isDefault && <div className="defaultAdd">Default</div>}
                </li>
              );
            })}
          </ul>
          <div className="addAddress">
            <button onClick={() => setDisplayAddAddress(true)}>
              Add New Address
            </button>
          </div>
        </div>
        <div className="order">
          <h3 className="gradient_background">Order Summary</h3>
          <div className="orderDetails">
            <div className="cart__value">
              <p>Cart Value</p>
              <p className="numbers">Rs. {cartValue}</p>
            </div>
            <div className="shipping__charges">
              <p>Shipping Charges</p>
              <p className="numbers">Rs. 250</p>
            </div>
            <div className="totalCharges">
              <p>Total Charges </p>
              <p className="numbers">Rs. {cartValue + 250}</p>
            </div>
            <div className="totalCharges">
              <p>Select Address </p>
              <select
                className="addressSelection"
                name="address__selection"
                id="address__selection"
              >
                {address.map((address) => {
                  return (
                    <option
                      className="address__selection__option"
                      value={address.type}
                    >
                      {address.type}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <footer>
            <button
              onClick={() => {
                navigate("/orderConfirmation");
              }}
              className="fancyButton"
            >
              Buy Now
            </button>
            <button className="fancyButton">Cancel</button>
          </footer>
        </div>
      </div>
    </div>
  );
};
