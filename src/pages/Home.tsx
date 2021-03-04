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
import { ReactComponent as Resume } from "../svgs/resume.svg";
import { ReactComponent as Code } from "../svgs/code.svg";
import { ReactComponent as Cookie } from "../svgs/cookie.svg";
import { Link } from "react-router-dom";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <PreviewContainer>
        <Left>
          <Link to="/resume">
            <ResPreview className="main-nav">
              <Resume className="resume-icon" width="130px" height="190px" />
            </ResPreview>
          </Link>
          <Link to="/about">
            <AboutPreview className="main-nav">About</AboutPreview>
          </Link>
        </Left>
        <Right>
          <Link to="/projects">
            <ProPreview className="main-nav">
              <Code className="code-icon" />
            </ProPreview>
          </Link>
          <Link to="/food">
            <MiscPreview className="main-nav">
              <Cookie className="resume-icon" />
            </MiscPreview>
          </Link>
        </Right>
        <Bottom className="links">
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
          <a href="http://www.dev.to/AmSmo" target="_blank" rel="noreferrer">
            <Dev className="icon" />
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
