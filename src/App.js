import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Home } from "./pages/home";
import { Navbar } from "./components/navbar";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/wishlist";
import { ProductDetails } from "./pages/productDetials";
import { Login } from "./pages/login";
import { ProductList } from "./pages/ProductList";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>

      <div className="mainPage">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productList" element={<ProductList />}></Route>
          <Route
            path="/productList/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/mockman" element={<Mockman />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
