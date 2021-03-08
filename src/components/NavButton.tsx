import React from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "../styles/styles";

type NavButtonProps = {
  link: string;
  name: string;
};

const NavButton: React.FC<NavButtonProps> = ({ link, name }) => {
  return (
    <NavStyle>
      <NavLink className="left" to={link}>
        {name}
      </NavLink>
    </NavStyle>
  );
};

export default NavButton;
