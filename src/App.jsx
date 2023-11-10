import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ShoppingCart1 from "./components/Shoppingcart";
import Cart1 from "./components/Cart1";
import Homedata1 from "./components/Homedata";
import { ContextProvider } from "./components/context";
import UploadComponent from "./components/New";

export default function App() {
  return (
    // <UploadComponent />
    <ContextProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Home />} />
          <Route path="/products" element={<ShoppingCart1 />} />
          <Route path="/angle" element={<Login />} />
          <Route path="/kart" element={<Cart1 />} />
          <Route path="/home1" element={<Homedata1 />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
