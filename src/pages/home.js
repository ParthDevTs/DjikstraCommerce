import { useEffect, useState } from "react";
import "./css files/home.css";
import { Dna } from "react-loader-spinner";
import tech from "../assets/tech.avif";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [categories, setCotegories] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const getCategory = async () => {
    try {
      setShowLoader(true);
      const res = await fetch("/api/categories", {
        method: "GET",
      });
      const { categories } = await res.json();
      setCotegories(categories);
      setShowLoader(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategory();
    return () => {};
  }, []);

  return (
    <div className="home">
      <div className="homepage">
        <div className="categoryList">
          <ul className="categories">
            {showLoader && (
              <div className="spinner-box">
                <Dna
                  className="spinner"
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="dna-loading"
                  wrapperStyle={{}}
                  wrapperClass="dna-wrapper"
                />
              </div>
            )}
            {categories.map((category) => {
              const { categoryName, description, url } = category;
              return (
                <li
                  className="category"
                  onClick={() => navigate("/productList")}
                >
                  <p className="categoryLabel">{categoryName}</p>
                  <p className="hoverText">{description} &#x2192;</p>
                  <div className="hero-image">
                    <img className="image" src={url} alt="" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mainImage">
          <img className="image" src={tech} alt="" />
        </div>
        <div className="collections">
          <div className="wintercollection collection"></div>
          <div className="summerCollection collection"></div>
        </div>
      </div>
    </div>
  );
};
