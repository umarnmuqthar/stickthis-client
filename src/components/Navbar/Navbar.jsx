import React from "react";
import logo from "../../stickthis-logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-2 py-2 lg:px-5 bg-veryDarkGray sticky top-0 right-0 left-0 z-10">
      <div>
        <a href="/">
          <img src={logo} alt="Logo" className="h-10" />
        </a>
      </div>

      <ul class="hidden lg:flex items-center justify-around gap-8 text-turquoise">
        <li id="categoryListBtn" class="py-1 hover:text-white cursor-pointer">
          Shop by category
        </li>
        <li class="py-1 hover:text-white">
          <a href="/custom-design">Custom design</a>
        </li>
        <li class="py-1 hover:text-white">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <div class="flex items-center gap-4">
        <div class="flex items-center gap-5">
          <button id="searchBtn">
            <i class="bi bi-search text-xl text-white hover:text-turquoise"></i>
          </button>
          <div class="hidden lg:flex gap-5 items-center">
            <a href="/wishlist">
              <i class="bi bi-heart text-xl text-white hover:text-turquoise"></i>
            </a>
            <a href="/cart">
              <i class="bi bi-cart3 text-xl text-white hover:text-turquoise"></i>
            </a>
            <a href="/login">
              <i class="bi bi-person-circle text-3xl text-white hover:text-turquoise"></i>
            </a>
          </div>
        </div>
        {/* menu button for mobile devices */}
        <button id="menuBtn" class="lg:hidden">
          <i class="bi bi-list text-4xl text-white"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
