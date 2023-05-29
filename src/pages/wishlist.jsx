import React, { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { ProductCard } from "../components/productCard";
import "./css files/wishlist.css";
import { useCart } from "../context/CartContext";

export const Wishlist = () => {
  const { getWishlist, wishlist, showLoader } = useCart();
  // eslint-disable-next-line
  useEffect(() => {
    // eslint-disable-next-line
    getWishlist();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="wishlist">
      <h1 className="wishlistHeading">Wishlist</h1>
      <div className="wishlistMain">
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
        {wishlist.map((product) => {
          return <ProductCard key={product._id} item={product} />;
        })}
      </div>
    </div>
  );
};
