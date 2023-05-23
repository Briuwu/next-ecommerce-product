"use client";

import Image from "next/image";
import { useState } from "react";
import Cart from "./Cart";
import Profile from "./Profile";

const navItems = ["Collections", "Men", "Women", "About", "Contact"];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItemsElements = navItems.map((el, index) => (
    <li
      key={index}
      className="cursor-pointer text-darkGrayishBlue hover:text-black"
    >
      {el}
    </li>
  ));

  const handleMenuClick = () => {
    const toggle = !menu;
    setMenu((prev) => !prev);

    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  return (
    <nav
      className={`flex items-center w-full gap-3 md:gap-12 p-6 md:py-8 md:border-b border-gray-300 md:px-0 relative`}
    >
      <button className="md:hidden z-[99999]" onClick={handleMenuClick}>
        <Image
          src={menu ? "/images/icon-close.svg" : "/images/icon-menu.svg"}
          width={16}
          height={15}
          alt="menu"
        />
        <span className="sr-only">Menu</span>
      </button>
      <Image
        src={"/images/logo.svg"}
        width={138}
        height={20}
        alt="Ecommerce Logo"
      />
      {menu && (
        <div className="absolute inset-0 bg-black bg-opacity-75 z-[999] min-h-screen md:hidden" />
      )}
      <ul
        aria-label="mobile-menu"
        className={`${
          menu ? "absolute" : "hidden"
        } md:hidden bg-white z-[9999] left-0 w-52 top-0 min-h-screen pt-20 p-6 gap-5 flex flex-col font-bold`}
      >
        {navItemsElements}
      </ul>
      <ul aria-label="desktop-menu" className="hidden md:flex gap-8">
        {navItemsElements}
      </ul>
      <div className="flex ml-auto items-center gap-5 md:gap-10">
        <Cart />
        <Profile />
      </div>
    </nav>
  );
};

export default Navbar;
