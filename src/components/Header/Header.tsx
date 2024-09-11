import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setActiveRoute(location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    handleRouteChange();

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [location]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    open: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Brand</h1>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li
              className={`px-4 py-2 rounded-md ${
                activeRoute === "/"
                  ? "bg-gray-200 text-gray-800"
                  : "hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <a href="/">Home</a>
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                activeRoute === "/about"
                  ? "bg-gray-200 text-gray-800"
                  : "hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <a href="/about">About</a>
            </li>
            <li
              className={`px-4 py-2 rounded-md ${
                activeRoute === "/contact"
                  ? "bg-gray-200 text-gray-800"
                  : "hover:bg-gray-200 hover:text-gray-800"
              }`}
            >
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <motion.div
        className="md:hidden"
        variants={menuVariants}
        animate={isMenuOpen ? "open" : "closed"}
        transition={menuVariants.open.transition}
      >
        <ul className="p-4">
          <li className="px-4 py-2 rounded-md">
            <a href="/">Home</a>
          </li>
          <li className="px-4 py-2 rounded-md">
            <a href="/about">About</a>
          </li>
          <li className="px-4 py-2 rounded-md">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
