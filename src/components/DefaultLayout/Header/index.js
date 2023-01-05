import React from "react";
import { Link } from "react-router-dom";
import Grid from "../../Grid";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <Grid>
        <div className="header__navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"
            alt=""
            className="header__logo"
          />
          <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <Link to="/" className="header__navbar-link">
                Home
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="/catalog" className="header__navbar-link">
                Shop
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                Blog
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                About
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="header__navbar-right">
            <div className="header__navbar-item-search">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="header__navbar-item-input"
              />
              <button type="button" className="header__navbar-item-btn">
                <i class="fa-solid fa-magnifying-glass header__navbar-item-icon"></i>
              </button>
            </div>

            <li className="header__navbar-item">
              <Link to="/cart" className="header__navbar-link">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li className="header__navbar-item">
              <Link to="" className="header__navbar-link">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </Grid>
    </section>
  );
};

export default Header;
