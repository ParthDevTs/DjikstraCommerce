import { useCart } from "../context/CartContext";
import "./css files/orderSummary.css";
export const OrderSummary = () => {
  const { address } = useCart();
  return (
    <div className="orderSummaryPage">
      <div className="orderSummary">
        <div className="addressList">
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
                  <p className="addressline add">
                    <b>{addressLine2}</b>
                  </p>
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
            <button>Add New Address</button>
          </div>
        </div>
        <div className="orderSummary">
          <div className="orderDetails"></div>
        </div>
      </div>
    </div>
  );
};
