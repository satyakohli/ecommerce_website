import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import image from "../assets/product.jpg";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();
  const [isDropDownVisible, setDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setDropDownVisible(!isDropDownVisible);
  };

  const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  const logOutButton = () => {
    navigate("/");
  };

  return (
    <div className="white-background">
      <div className="navbar">
        <div>
          <nav className="navbar_left">
            <img className="product_tag" src={image} alt="Product" />
            <ul>
              <li>
                <Link to="/home1">Homepage</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/kart">
                  <span>Cart ({cart.length})</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav className="navbar_right">
            <button className="log_out" onClick={logOutButton}>
              <AiOutlineLogout />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
