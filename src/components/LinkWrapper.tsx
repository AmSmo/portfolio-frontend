import React, { ReactNode } from "react";

type LinkWrapperProps = {
  children: ReactNode;
  link: string;
};

const LinkWrapper: React.FC<LinkWrapperProps> = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default LinkWrapper;
