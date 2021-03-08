import React from "react";
import { Bottom } from "../styles/styles";
import { ReactComponent as Dev } from "../svgs/dev.svg";
import { ReactComponent as LinkedIn } from "../svgs/linkedin.svg";
import { ReactComponent as Git } from "../svgs/github.svg";
import { ReactComponent as Email } from "../svgs/email.svg";
import LinkWrapper from "./LinkWrapper";
type ContactLinksProps = {};

const ContactLinks: React.FC<ContactLinksProps> = () => {
  return (
    <Bottom className="links">
      <LinkWrapper link="http://www.github.com/AmSmo">
        <Git className="icon scale-in-center" />
      </LinkWrapper>

      <LinkWrapper link="http://www.linkedin.com/in/AdamSmolenski">
        <LinkedIn className="icon scale-in-center" />
      </LinkWrapper>

      <LinkWrapper link="http://www.dev.to/AmSmo">
        <Dev className="icon scale-in-center" />
      </LinkWrapper>

      <LinkWrapper link="mailto:adam.smolenski@gmail.com">
        <Email className="icon scale-in-center" />
      </LinkWrapper>
    </Bottom>
  );
};

export default ContactLinks;
