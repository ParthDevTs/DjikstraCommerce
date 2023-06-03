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
  const [searchTerm, setSearchTerm] = useState("");
  const [listsort, setListSort] = useState("a-z");

  const handlePriceFilter = (event) => {
    SetFilteredPrice(event.target.value);
  };

  const sortList = (a, b) => {
    switch (listsort) {
      case "a-z":
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      case "z-a":
        return a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
      case "lowhigh":
        return a.price > b.price ? 1 : -1;
      case "highlow":
        return a.price > b.price ? -1 : 1;
      default:
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    }
  };

  const priceFilter = (item) => {
    if (filteredPrice !== 0) {
      return item.price < filteredPrice;
    } else {
      return true;
    }
  };

  const searchList = (item) => {
    return searchTerm.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(searchTerm);
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
    setSearchTerm("");
    setListSort("a-z");
  };
  return (
    <div className="productListPage">
      <div className="productListMainWindow">
        <div className="filters">
          <div className="filtersList">
            <div className="category__filter">
              <p className="filterHeading">Select Category</p>
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
              <p className="filterHeading">Filter Price</p>
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
            <div className="lineBreak"></div>
            <div className="searchbox">
              <p className="filterHeading">Search Item</p>
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                type="text"
              />
            </div>
            <div className="lineBreak"></div>
            <div className="category__filter">
              <p className="filterHeading">Sorting</p>
              <select
                value={listsort}
                onChange={(event) => setListSort(event.target.value)}
                className="categorySelection"
              >
                <option className="filterListOptions" value="a-z">
                  a-z
                </option>
                <option className="filterListOptions" value="z-a">
                  z-a
                </option>
                <option className="filterListOptions" value="lowhigh">
                  Price: Lowest First
                </option>
                <option className="filterListOptions" value="highlow">
                  Price: Highest First
                </option>
              </select>
            </div>
            <div className="lineBreak"></div>
          </div>

          <button className="resetFilter" onClick={handlereset}>
            Reset Filters
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
            .filter((item) => priceFilter(item))
            .filter((item) => searchList(item))
            .sort((first, second) => sortList(first, second))
            .map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
        </ul>
      </div>
    </div>
  );
};
