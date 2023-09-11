import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";
import Gift from "./pages/Gift";
import Order from "./pages/Order";
import Pay from "./pages/Pay";
import Store from "./pages/Store";
import Search from "./pages/Search";

function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/order" element={<Order />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/store" element={<Store />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
