import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

/* LINK BEHAVIOR | ACTIVE LINKS */
const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

/* NAV ROUTE SETUP */
const NavLinks = () => {
  return (
    <>
      <NavLink to="/rgc-portfolio" className={activeStyleCallback}>
        Home
      </NavLink>
      <NavLink to="/about" className={activeStyleCallback}>
        About
      </NavLink>
      <NavLink to="/projects" className={activeStyleCallback}>
        Projects
      </NavLink>
    </>
  );
};

/* NAV LAYOUT */
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <nav className="flex justify-end w-1/3">
          <div className="hidden w-full justify-between md:flex ">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      ) : (
        <nav className="flex justify-end w-1/3">
          <div className="">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      )}

      {isOpen && (
        <div className="flex basis-full flex-col items-start pl-3 mb-3">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
