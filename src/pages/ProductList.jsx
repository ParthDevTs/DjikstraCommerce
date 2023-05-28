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

  const { filter } = useParams();

  const getData = async () => {
    setShowLoader(true);
    await fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setLocalproductList(data.products);
        setProductList(data.products);
      });
    setShowLoader(false);
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

  useEffect(useEffectHandler, []);

  const filterHandler = (event) => {
    let selectedCategory = event.target.value;
    filterProductList(selectedCategory);
  };
  return (
    <div className="productListPage">
      <div className="productListMainWindow">
        <div className="filters">
          <div className="filtersList">
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
            </select>
          </div>
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
          {localproductList.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};
