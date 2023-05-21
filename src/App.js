import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Home } from "./pages/home";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
      </header>

      <div className="mainPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
      </div>
      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default App;
