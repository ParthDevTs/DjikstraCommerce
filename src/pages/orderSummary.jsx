import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./css files/orderSummary.css";
import { useNavigate } from "react-router-dom";
import { FormattedNum } from "../components/formattedNum";
export const OrderSummary = () => {
  const { address, cartValue, addAddress, orderHandler, cartProducts } =
    useCart();
  const [displayAddAddress, setDisplayAddAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(address[0]);
  const addressList = address;
  const addressObj = {
    type: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    isDefault: false,
    pincode: "",
    person: localStorage.getItem("loginEmail"),
  };

  const itemsNum = cartProducts?.reduce((total, curr) => total + curr.qty, 0);

  const navigate = useNavigate();

  //Address Logic
  const [userAddress, setUserAddress] = useState(addressObj);
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
              className=" fancyButton closeAddress"
            >
              &#10006;
            </button>

            <div className="formField">
              <p>Address Name</p>
              <input
                onChange={addressHandler}
                value={userAddress.type}
                type="text"
                name="type"
                id="type"
                autoComplete="name"
                maxLength={10}
              />
            </div>
            <div className="formField">
              <p>Address Line 1</p>
              <input
                onChange={addressHandler}
                value={userAddress.addressLine1}
                type="text"
                name="addressLine1"
                autoComplete="address line 1"
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
                autoComplete="address line 2"
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
                autoComplete="city"
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
                autoComplete="state"
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
                autoComplete="pincode"
                id="pincode"
              />
            </div>
            <footer>
              <button
                className="fancyButton"
                onClick={() => {
                  setUserAddress(addressObj);
                  addAddress(userAddress);
                  setDisplayAddAddress(false);
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
          <div className="addAddress">
            <button
              className="add__new__add_btn"
              onClick={() => setDisplayAddAddress(true)}
            >
              Add New Address
            </button>
          </div>

          <ul className="allAddresses">
            {addressList.map((address) => {
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
                <li className="order__summary__address" key={`${id + type}`}>
                  <h3 className="type">{type}</h3>
                  <div className="order__address">
                    <p className="order__addressline add">{addressLine1}</p>
                    {addressLine2.length > 0 && (
                      <p className="order__addressline add">{addressLine2}</p>
                    )}
                    <p className="order__city add">{city}</p>
                    <p className="order__city add">{state}</p>
                    <p className="order__pincode add">{pincode}</p>
                  </div>
                  {isDefault && <div className="defaultAdd">Default</div>}
                  <div className="footer">
                    <button
                      disabled={selectedAddress.id === address.id}
                      onClick={() => setSelectedAddress(address)}
                    >
                      {selectedAddress.id === address.id
                        ? "Address Selected"
                        : "Select Address "}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="order">
          <div className="header">
            <h3>Order Summary</h3>
          </div>
          <div className="orderDetails">
            <div className="cart__value">
              <p>Cart items x {itemsNum}</p>
              <p className="numbers">
                <FormattedNum num={cartValue} />
              </p>
              <p>Shipping Charges</p>
              <p className="numbers">
                <FormattedNum num={250} />
              </p>
            </div>
          </div>
          <div className="totalCharges">
            <div className="charges">
              <p>Total Charges </p>
              <p className="numbers">
                {" "}
                <FormattedNum num={cartValue + 250} />
              </p>
            </div>
          </div>
          <footer>
            <button
              onClick={() => {
                orderHandler(selectedAddress);
                navigate("/orderConfirmation");
              }}
              className="confirm__button button-blue"
            >
              Place Order
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
