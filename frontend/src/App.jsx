import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Home from "./pages/Home";
import Training from "./pages/Training";
import Singlecoursepage from "./pages/Singlecoursepage";
import Membership from "./pages/Membership";
import Certification from "./pages/Certification";
import SingleCertificate from "./pages/SingleCertificate";
import Cart from "./pages/Cart";
import News from "./pages/News";
import Checkout from "./pages/Checkout";
import Thankyou from "./pages/Thankyou";
import SingleNews from "./pages/SingleNews";
import MyRenderHeader from "./components/MyRenderHeader/MyRenderHeader";
import Order from "./pages/Order";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";

import ProtectedRoute from "./routes/ProtectedRoute";
import SingleOrder from "./pages/SingleOrder";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <MyRenderHeader>
        <Header />
      </MyRenderHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/singlecoursesp/:id" element={<Singlecoursepage />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/singlenews/:id" element={<SingleNews />} />
        <Route path="/certification/:courseId" element={<SingleCertificate />}/>
       
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderdetails/:id" element={<SingleOrder />} />
          <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
          <Route path="/thankyou" element={<Thankyou />} />
        </Route>

        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
      <ScrollToTop />
      <MyRenderHeader>
        <Footer />
      </MyRenderHeader>
    </Router>
  );
}

export default App;
