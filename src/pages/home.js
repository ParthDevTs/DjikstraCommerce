import { useState } from "react";
import "./home.css";

export const Home = () => {
  const [categories, setCotegories] = useState([]);

  const getCategory = async () => {
    try {
      const res = await fetch("/api/categories", {
        method: "GET",
      });
      const { categories } = await res.json();
      setCotegories(categories);
    } catch (e) {
      console.error(e);
    }
  };

  useState(getCategory, []);

  return (
    <div className="home">
      <div className="homepage">
        <div className="categoryList">
          <ul className="categories">
            {categories.map((category) => {
              const { categoryName, description } = category;
              return (
                <li className="category">
                  <p className="categoryLabel">{categoryName}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mainImage">
          <img className="image" src="" alt="" />
        </div>
        <div className="collections">
          <div className="wintercollection collection"></div>
          <div className="summerCollection collection"></div>
        </div>
      </div>
    </div>
  );
};
