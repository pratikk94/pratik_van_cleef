import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout/Checkout";
import Products from "./pages/Products/Products";
import Payment from "./pages/Payment/Payment";
import FindStore from "./pages/FindStore/FindStore";
import Contactus from "./pages/Contactus/Contactus";
import Cart from "./pages/Cart/Cart";
import Booking from "./pages/Booking/Booking";
import MainPageO from "./pages/MainPage/MainPage_old";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Checkout />} />
          <Route path="/ringsO" element={<MainPageO />} />
          <Route
            path="/rings"
            element={<MainPage baseUrl={"https://real.heroksa.net"} />}
          />
          <Route path="/products" element={<Products />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/findstore" element={<FindStore />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
