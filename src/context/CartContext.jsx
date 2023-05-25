import { createContext, useContext, useState } from "react";
import React from "react";
import phonesDB from "../database/ProductDb";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [productList, setProductList] = useState([]);

  const filterCart = (item) => {
    return cartProducts.filter((product) => product.id !== item.id);
  };
  const filterWishlist = (item) => {
    return wishlist.filter((product) => product.id !== item.id);
  };
  const removeFromCart = (item) => {
    let filtereedCart = filterCart(item);
    setCartProducts(filtereedCart);
  };
  const updateCart = (item) => {
    if (cartProducts.find((product) => product.id === item.id) === undefined) {
      setCartProducts((cart) => [...cartProducts, { ...item, quantity: 1 }]);
    } else {
      let newArray = cartProducts.map((product) =>
        product.id === item.id
          ? { ...item, quantity: product.quantity + 1 }
          : product
      );
      setCartProducts(newArray);
    }
  };

  const filterProductList = (category) => {
    if (category !== "All") {
      setProductList(
        productList.filter((product) => product.category === category)
      );
    } else {
      setProductList(productList);
    }
  };

  const addToWishlist = (item) => {
    if (wishlist.find((product) => product.id === item.id) === undefined) {
      setWishList((cart) => [...wishlist, { ...item, quantity: 1 }]);
    } else {
      let newArray = wishlist.map((product) =>
        product.id === item.id
          ? { ...item, quantity: product.quantity + 1 }
          : product
      );
      setWishList(newArray);
    }
  };

  const removeFromWishlist = (item) => {
    let filtereedWishlist = filterWishlist(item);
    setWishList(filtereedWishlist);
  };

  const itemsNum = cartProducts.reduce(
    (total, curr) => total + curr.quantity,
    0
  );
  const wishlistNum = wishlist.reduce((total, curr) => total + 1, 0);

  return (
    <CartContext.Provider
      value={{
        updateCart,
        cartProducts,
        removeFromCart,
        addToWishlist,
        wishlist,
        removeFromWishlist,
        productList,
        filterProductList,
        setCartProducts,
        itemsNum,
        wishlistNum,
        setProductList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
