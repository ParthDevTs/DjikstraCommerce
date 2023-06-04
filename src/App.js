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
import { RequiresAuth } from "./components/RequiresAuth";
import { OrderSummary } from "./pages/orderSummary";

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
          <Route
            path="/productList/filters/:filter"
            element={<ProductList />}
          ></Route>
          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <Wishlist />
              </RequiresAuth>
            }
          ></Route>

          <Route
            path="/summary"
            element={
              <RequiresAuth>
                <OrderSummary />
              </RequiresAuth>
            }
          />

          <Route path="/mockman" element={<Mockman />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
