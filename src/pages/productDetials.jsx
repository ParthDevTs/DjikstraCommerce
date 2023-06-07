import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useCart } from "../context/CartContext";
import { Dna } from "react-loader-spinner";
import "./css files/productDetails.css";
import { useAuthContext } from "../context/authContext";
import { FormattedNum } from "../components/formattedNum";
import { toast } from "react-toastify";
import wishlistbtnicon from "../assets/favorite.svg";
import filledwishlistbtnicon from "../assets/favoritefilled.svg";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [showLoader, setShowLoader] = useState(false);
  const { productId } = useParams();
  const { isLoggedIn } = useAuthContext();
  const { addToWishlist, addToCart, wishlist, removeFromWishlist } = useCart();

  // eslint-disable-next-line
  useEffect(() => {
    const getProduct = async () => {
      setShowLoader(true);
      await fetch(`/api/products/${productId}`)
        .then(async (res) => await res.json())
        .then(async (data) => setProduct(await data.product))
        .catch((e) => console.error(e));
      setShowLoader(false);
    };
    // eslint-disable-next-line
    getProduct();
    // eslint-disable-next-line
  }, []);

  const [addtocart, setAddToCart] = useState("Add To Cart");

  const { name, price, category, details, imgUrl, memory, company, salePrice } =
    product;

  let disabledWishlist =
    wishlist?.find((item) => product._id === item._id) !== undefined;

  const wishlistHandler = async () => {
    if (!isLoggedIn) {
      toast.error("Please login to use Wishlist");
      navigate("/login");
    } else {
      !disabledWishlist
        ? await addToWishlist(product)
        : await removeFromWishlist(product);
    }
  };

  const addToCartHandler = async () => {
    if (!isLoggedIn) {
      toast.error("Please login to use Cart");
      navigate("/login");
    } else {
      setAddToCart("Added ✓");
      await addToCart(product);
      const timer = setTimeout(() => {
        setAddToCart("Add To Cart");
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

  return (
    <div className="productDetailPage">
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
      {!showLoader && (
        <div className="productDetailMainWindow">
          <section className="product__detail__1">
            <div className="imageWindow">
              <img className="prodimage" src={imgUrl} alt="productImg" />
            </div>
            <div className="detailsWindow">
              <div className="product__header">
                <p className="product__company">{company}</p>
                <h1 className="product__detail__name">{name}</h1>
                <p className="product__category">
                  <span style={{ color: "#2874f0" }}>{category}</span>
                </p>
                <div className="product__line"></div>
              </div>
              {salePrice && (
                <p className="product__detail__price">
                  <span className="sale__price">
                    <FormattedNum num={salePrice ?? 0} />
                  </span>
                  <span className="normal__price">
                    <FormattedNum num={price} />
                  </span>
                </p>
              )}
              {!salePrice && (
                <p className="product__detail__price">
                  <span className="sale__price">
                    <FormattedNum num={price} />
                  </span>
                </p>
              )}

              <div className="product__action__Button">
                <button
                  onClick={addToCartHandler}
                  className="product__add__cart__btn"
                >
                  {addtocart}
                </button>
              </div>

              <button
                style={{
                  color: disabledWishlist ? "white" : null,
                }}
                onClick={wishlistHandler}
                className="product__detail__wishListBtn"
              >
                {!disabledWishlist ? (
                  <img src={wishlistbtnicon} alt="wishlist Button" />
                ) : (
                  <img src={filledwishlistbtnicon} alt="wishlist Button" />
                )}
              </button>
            </div>
            {salePrice && <div className="sale__badge">Sale</div>}
          </section>
          <section className="product__detail__2">
            <p className="production__description__label">
              Product Description
            </p>
            <p className="product__description">{details}</p>
          </section>
          {memory !== null ? (
            <section className="product__detail__3">
              <p className="product__specs__label ">Product Specification</p>

              <p>
                Memory: <span style={{ color: "#2874f0" }}>{memory}Gb</span>
              </p>
            </section>
          ) : null}
        </div>
      )}
    </div>
  );
};
