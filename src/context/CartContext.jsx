import { createContext, useContext, useEffect, useState } from "react";
import { GetUserAddress } from "../database/addressDb";
import React from "react";
import { useAuthContext } from "./authContext";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [address, setAddress] = useState([]);
  const { isLoggedIn } = useAuthContext();
  const [wishListCounter, setWishListCounter] = useState(0);
  const [orderProducts, setOrdererdProduts] = useState({
    orderedAddress: {},
    orderArray: [],
  });
  const [navbarSearchItem, setNavbarSearchItem] = useState("");

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
      .catch((e) => {
        console.error(e);
        toast("Some Error Occured");
      });
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
          toast(`${item.name} Added to Wishlist`);
        })
        .catch((e) => toast("Some error occured"));
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
        toast(`${item.name} Removed from Wishlist`);
      })
      .catch((e) => toast("Some error occured"));
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
      .catch((e) => toast("Some error occured"));
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
        toast(`${item.name} Added to Cart`);
      })
      .catch((e) => toast("Some error occured"));
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
        toast(`${item.name} ${action === "increment" ? "+ 1" : "- 1"}`);
      })
      .catch((e) => toast("Some error occured"));
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
        toast(`${item.name} removed from Cart`);
      })
      .catch((e) => toast("Some error occured"));
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
    const unique_id = uuid();
    setAddress([
      ...address,
      {
        ...newAddress,
        id: unique_id,
        person: localStorage.getItem("loginEmail"),
      },
    ]);
    toast(`${newAddress.type} added.`);
  };

  const orderHandler = (selectedObj) => {
    let addressObj = address.find((add) => add.id === selectedObj.id);
    let orderArray = cartProducts;

    setOrdererdProduts({
      orderedAddress: addressObj ?? { ...address[0] },
      orderArray: orderArray,
    });

    toast("Order Completed");

    orderArray.map((item) => removeFromCart(item));
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
      let addressArray = GetUserAddress(email);
      setAddress(addressArray);
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
        orderHandler,
        orderProducts,
        setNavbarSearchItem,
        navbarSearchItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
