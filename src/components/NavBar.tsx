import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavButton } from "../styles/styles";
type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Nav>
      <NavButton>
        <NavLink to="/">Home</NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/resume">Resume</NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/projects">Projects</NavLink>
      </NavButton>
      <NavButton>
        <NavLink to="/about">About</NavLink>
      </NavButton>
    </Nav>
  );
};

export default NavBar;
