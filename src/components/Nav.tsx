import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  console.log(isOpen);

  return (
    <>
      {/*  Not Open */}
      {!isOpen ? (
        <nav className="flex gap-2">
          <div className="hidden md:flex gap-5">
            <NavLinks />
          </div>
          <div className="md:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      ) : (
        <nav className="flex gap-2">
          <div className="flex gap-4">
            <NavLinks />
          </div>
          <div>
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </nav>
      )}
      {/*  When Open  place the menu below and  in column */}
      {/* {isOpen && (
        <div className="flex basis-full flex-col items-start pl-3 mb-3">
          <NavLinks />
        </div>
      )} */}
    </>
  );
};

export default Nav;
