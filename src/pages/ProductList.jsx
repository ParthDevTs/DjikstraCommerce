import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/productCard";
import { Dna } from "react-loader-spinner";
import "./css files/productList.css";
import { useParams } from "react-router-dom";

export const ProductList = () => {
  const { setProductList, productList } = useCart();
  const [localproductList, setLocalproductList] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [filteredPrice, SetFilteredPrice] = useState(0);

  const handlePriceFilter = (event) => {
    SetFilteredPrice(event.target.value);
  };

  const { filter } = useParams();

  const getData = async () => {
    setShowLoader(true);
    await fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setLocalproductList(data.products);
        setProductList(data.products);
      });
    await setShowLoader(false);
  };

  const filterProductList = async (category) => {
    setShowLoader(true);
    if (category !== "All") {
      await fetch("/api/products")
        .then((response) => response.json())
        .then((data) => {
          setLocalproductList(
            data.products.filter((product) => product.category === category)
          );
        });
    } else {
      setLocalproductList(productList);
    }
    setShowLoader(false);
  };

  function getFilter(selectedFilter = "All") {
    filterProductList(selectedFilter);
  }

  const useEffectHandler = () => {
    getData();
    getFilter(filter);
    return () => {};
  };
  // eslint-disable-next-line
  useEffect(useEffectHandler, []);

  const filterHandler = (event) => {
    let selectedCategory = event.target.value;
    filterProductList(selectedCategory);
  };

  const handlereset = () => {
    SetFilteredPrice(0);
    filterProductList("All");
  };
  return (
    <div className="productListPage">
      <div className="productListMainWindow">
        <div className="filters">
          <div className="filtersList">
            <div className="category__filter">
              <p className="filterHeading">Category</p>
              <select
                defaultValue={filter}
                onChange={filterHandler}
                className="categorySelection"
              >
                <option className="filterListOptions" value="All">
                  All
                </option>
                <option className="filterListOptions" value="iPhone">
                  iPhone
                </option>
                <option className="filterListOptions" value="iPad">
                  iPad
                </option>
                <option className="filterListOptions" value="Galaxy Tab">
                  Galaxy Tab
                </option>
                <option className="filterListOptions" value="IEMs">
                  IEMs
                </option>
                <option className="filterListOptions" value="Headphones">
                  Headphones
                </option>
              </select>
            </div>
            <div className="lineBreak"></div>
            <div className="price__filter">
              <p className="filterHeading">{filteredPrice}</p>
              <input
                min="0"
                max="200000"
                type="range"
                name="priceRange"
                value={filteredPrice}
                onChange={handlePriceFilter}
                step={10000}
                id="priceRange"
              />
            </div>
          </div>
          <button className="resetFilter" onClick={handlereset}>
            Reset Filter
          </button>
        </div>

        <ul className="productList">
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
          {localproductList
            .filter((item) => {
              if (filteredPrice !== 0) {
                return item.price < filteredPrice;
              } else {
                return true;
              }
            })
            .map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
};
