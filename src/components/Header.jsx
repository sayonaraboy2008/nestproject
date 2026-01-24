import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <>
      <header className="max-w-[1310px] m-auto flex justify-between items-center ">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" />
          <div>
            <input
              type="search"
              placeholder="Search for products..."
              name=""
              id=""
            />
            <button>Search</button>
          </div>
        </div>
        <ul className="flex items-center gap-6">
          <div>
            <h3>Became Vendor</h3>
          </div>
          <li>
            <a href="">Compare</a>
          </li>
          <li>
            <a href="">Wishlist</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
