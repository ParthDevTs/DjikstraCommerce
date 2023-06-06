import { useEffect, useState } from "react";
import "./css files/home.css";
import { Dna } from "react-loader-spinner";
// import tech from "../assets/tech.avif";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";

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
      await setShowLoader(false);
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
        <div className="mainImage">
          <img
            className="image"
            src="https://cdn.shopify.com/s/files/1/0153/8863/files/hexa_laptop.jpg?v=1683285676&width=1600"
            alt=""
          />
          <div className="mainImageText">
            <h1>Truthear Hexa</h1>
            <p>1 x Dynamic Driver + 3 x Balanced Armature</p>
            <p>Magic of 4 Drivers per side.</p>
            <button
              className="fancyButton"
              onClick={() => navigate("/productList/filters/IEMs")}
            >
              Buy Here
            </button>
          </div>
        </div>
        <h1 className="category__heading">
          <span className="gradient_background">Categories</span>
        </h1>
        <div className="categoryList">
          <ul className="categories">
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
            {categories.map((category) => {
              const { categoryName, description, url } = category;
              return (
                <li
                  key={categoryName}
                  className="category"
                  onClick={() =>
                    navigate(`/productList/filters/${categoryName}`)
                  }
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

        <h1 className="collection__heading">
          <span className="gradient_background">Featured Products</span>
        </h1>

        <div className="collections">
          <div
            onClick={() => navigate("/productList/filters/IEMs")}
            className="wintercollection collection newLaunches_hexa"
          ></div>
          <div
            onClick={() => navigate("/productList/filters/Headphones")}
            className="summerCollection collection newLaunches_focal"
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
