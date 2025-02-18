import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import Volunteer from "./Components/Volunteer.jsx";
import Footer from "./Components/Footer.jsx";
import DonationPage from "./Components/Donate.jsx";
import DonationPayment from "./Components/Donation_payment.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/donate/payment" element={<DonationPayment />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
