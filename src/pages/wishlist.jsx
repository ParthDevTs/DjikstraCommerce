import React, { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { ProductCard } from "../components/productCard";
import "./css files/wishlist.css";
import { useCart } from "../context/CartContext";
import shopping__svg from "../assets/shopping_undraw.svg";

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
      {wishlist.length > 0 && <h1 className="main__slogan">Wishlist</h1>}
      {wishlist.length === 0 && (
        <div className="gif">
          <div
            style={{
              paddingBottom: "56%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10rem",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <h1 className="main__slogan ">Why So Empty ?</h1>
            <img
              src={shopping__svg}
              className="emptycart__img"
              alt="shopping"
            />
          </div>
        </div>
      )}

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

      {wishlist.length > 0 && (
        <div className="wishlistMain">
          {wishlist?.map((product) => {
            return <ProductCard key={product._id} item={product} />;
          })}
        </div>
      )}
    </div>
  );
};
