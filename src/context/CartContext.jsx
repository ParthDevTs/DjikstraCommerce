import { createContext, useContext, useEffect, useState } from "react";
import { getAddresss } from "../database/addressDb";
import React from "react";
import { useAuthContext } from "./authContext";
import { v4 as uuid } from "uuid";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [address, setAddress] = useState([]);
  const { isLoggedIn } = useAuthContext();
  const [wishListCounter, setWishListCounter] = useState(0);

  const cartValue = cartProducts?.reduce(
    (totalValue, { price, qty }) => totalValue + price * qty,
    0
  );

  const defaultHeader = {
    authorization: localStorage.getItem("encodedToken"),
  };

  const getWishlist = async () => {
    setShowLoader(true);
    const header = {
      authorization: localStorage.getItem("encodedToken"),
    };
    await fetch("/api/user/wishlist", {
      method: "GET",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setWishList(data.wishlist);
      })
      .catch((e) => console.error(e));
    setShowLoader(false);
  };

  const addToWishlist = async (item) => {
    if (localStorage.getItem("encodedToken")) {
      const header = {
        authorization: localStorage.getItem("encodedToken"),
      };
      let reqBody = { product: item };
      await fetch("/api/user/wishlist", {
        method: "POST",
        headers: header,
        body: JSON.stringify(reqBody),
      })
        .then((res) => res.json())
        .then(async (data) => {
          setWishList(await data.wishlist);
        });
    }
  };

  const removeFromWishlist = async (item) => {
    const header = {
      authorization: localStorage.getItem("encodedToken"),
    };
    await fetch(`/api/user/wishlist/${item._id}`, {
      method: "DELETE",
      headers: header,
    })
      .then((res) => res.json())
      .then(async (data) => {
        setWishList(await data.wishlist);
      });
  };

  const getCart = async () => {
    const header = {
      authorization: localStorage.getItem("encodedToken"),
    };
    setShowLoader(true);
    await fetch("/api/user/cart", {
      method: "GET",
      headers: header,
    })
      .then((res) => res.json())
      .then((data) => {
        setCartProducts(data.cart);
      })
      .catch((e) => console.error(e));
    setShowLoader(false);
  };

  const createNewCartProd = async (item, header) => {
    let reqBody = { product: item };
    await fetch("/api/user/cart", {
      method: "POST",
      headers: header,
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const updateCartItem = async (item, action, header = defaultHeader) => {
    let reqBody = {};
    if (action === "increment") {
      reqBody = { action: { type: "increment" } };
    } else {
      reqBody = { action: { type: "decrement" } };
    }
    await fetch(`/api/user/cart/${item._id}`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const addToCart = async (item) => {
    if (localStorage.getItem("encodedToken")) {
      const header = {
        authorization: localStorage.getItem("encodedToken"),
      };
      const prodInList = cartProducts?.find(
        (product) => product.id === item.id
      );

      if (prodInList === undefined) {
        createNewCartProd(item, header);
      } else {
        updateCartItem(item, "increment", header);
      }
    }
  };

  const removeFromCart = async (item) => {
    const header = {
      authorization: localStorage.getItem("encodedToken"),
    };
    await fetch(`/api/user/cart/${item._id}`, {
      method: "DELETE",
      headers: header,
    })
      .then((res) => res.json())
      .then(async (data) => {
        setCartProducts(await data.cart);
      });
  };

  const resetCounters = () => {
    setWishList([]);
    setCartProducts([]);
  };

  const loginDataLoad = () => {
    getWishlist();
    getCart();
  };

  const addAddress = (newAddress) => {
    setAddress([
      ...address,
      { ...newAddress, id: uuid(), person: localStorage.getItem("loginEmail") },
    ]);
  };

  useEffect(() => {
    const updateCounter = () => {
      setWishListCounter(wishlist?.reduce((total, curr) => total + 1, 0));
    };

    updateCounter();
  }, [wishlist]);
  //address management
  useEffect(() => {
    const getAddress = async () => {
      let email = localStorage.getItem("loginEmail");
      let addressArray = await getAddresss(email);
      setAddress(await addressArray);
    };
    getAddress();
  }, [isLoggedIn]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        removeFromCart,
        addToWishlist,
        wishlist,
        removeFromWishlist,
        setCartProducts,
        setWishList,
        wishListCounter,
        getWishlist,
        getCart,
        addToCart,
        resetCounters,
        productList,
        setProductList,
        showLoader,
        loginDataLoad,
        address,
        updateCartItem,
        cartValue,
        addAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
