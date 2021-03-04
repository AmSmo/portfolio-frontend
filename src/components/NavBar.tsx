import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavButton } from "../styles/styles";
type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Nav>
      <NavButton>
        <NavLink className="left" to="/">
          Home
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink className="left" to="/food">
          Food
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink className="left" to="/resume">
          Resume
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink className="left" to="/projects">
          Projects
        </NavLink>
      </NavButton>
      <NavButton>
        <NavLink className="left" to="/about">
          About
        </NavLink>
      </NavButton>
    </Nav>
  );
};

export default NavBar;
