import React from "react";
import { Nav } from "../styles/styles";
import NavButton from "./NavButton";
type NavBarProps = {};

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Nav>
      <NavButton link="/" name="Home" />
      <NavButton link="/food" name="Food" />
      <NavButton link="/resume" name="Resume" />
      <NavButton link="/projects" name="Projects" />
      <NavButton link="/about" name="About" />
    </Nav>
  );
};

export default NavBar;
