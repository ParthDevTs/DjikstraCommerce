// import { NavLink } from "react-router-dom";
// import React from "react";
// import { useCart } from "../context/CartContext";
// export const SlipNav = () => {
//   const { cartProducts, wishlist } = useCart();
//   const itemsNum = cartProducts.reduce(
//     (total, curr) => total + curr.quantity,
//     0
//   );
//   const wishlistNum = wishlist.reduce((total, curr) => total + 1, 0);

//   const getActiveStyle = ({ isActive }) => ({
//     color: isActive ? "#ffe500" : "",
//   });

//   return (
//     <nav className="navStyle">
//       <div className="navContent">
//         <span className="logo">
//           Slip
//           <span style={{ color: "#ffe500" }}>Kart</span> &#128722;
//         </span>
//         <div className="spacer"></div>
//         <NavLink className="navLink" style={getActiveStyle} to="/">
//           Home
//         </NavLink>
//         <NavLink className="navLink" style={getActiveStyle} to="/productList">
//           All Products
//         </NavLink>
//         <NavLink className="navLink" style={getActiveStyle} to="/wishlist">
//           Wishlist
//         </NavLink>
//         <NavLink style={getActiveStyle} className="navLink cartBtn" to="/cart">
//           {" "}
//           &#128722; Cart <span className="numbers navCartNum">{itemsNum}</span>
//         </NavLink>
//       </div>
//     </nav>
//   );
// };
