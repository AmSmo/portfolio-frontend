import React from "react";
import {
  AboutPreview,
  MiscPreview,
  ProPreview,
  ResPreview,
  PreviewContainer,
  Left,
  Right,
  Bottom,
} from "../styles/styles";
import { ReactComponent as Dev } from "../svgs/dev.svg";
import { ReactComponent as LinkedIn } from "../svgs/linkedin.svg";
import { ReactComponent as Git } from "../svgs/github.svg";
import { ReactComponent as Email } from "../svgs/email.svg";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <PreviewContainer>
        <Left>
          <ResPreview>Resume</ResPreview>
          <AboutPreview>About</AboutPreview>
        </Left>
        <Right>
          <ProPreview>Projects</ProPreview>
          <MiscPreview>Food</MiscPreview>
        </Right>
        <Bottom className="links">
          <a href="http://www.dev.to/AmSmo" target="_blank" rel="noreferrer">
            <Dev className="icon" />
          </a>
          <a
            href="http://www.github.com/AmSmo"
            target="_blank"
            rel="noreferrer"
          >
            <Git className="icon" />
          </a>
          <a
            href="http://www.linkedin.com/in/AdamSmolenski"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon" />
          </a>
          <a
            href="mailto:adam.smolenski@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email className="icon" />
          </a>
        </Bottom>
      </PreviewContainer>
    </>
  );
};

export default Home;
