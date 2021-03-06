import React, { useState } from "react";
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
import { ReactComponent as About } from "../svgs/about.svg";
import { ReactComponent as GhostLight } from "../svgs/ghostlight2.svg";
import { Link } from "react-router-dom";
type HomeProps = {};

type IconType = {
  stroke: "red" | "transparent" | "white";
  fill: "white" | "transparent" | "#D4B783";
};

const Home: React.FC<HomeProps> = () => {
  let sleepy: IconType = { stroke: "transparent", fill: "transparent" };
  let awake: IconType = { stroke: "red", fill: "white" };
  let [about, setAbout] = useState<IconType>(sleepy);
  let [resume, setResume] = useState<IconType>(sleepy);
  let [food, setFood] = useState<IconType>(sleepy);
  let [code, setCode] = useState<IconType>(sleepy);
  return (
    <>
      <PreviewContainer>
        <h1
          style={{
            fontSize: "1.2em",
            marginBottom: "0px",
            paddingBottom: "0px",
            marginTop: "3px",
          }}
        >
          <span className="broadway">Broadway Audio Engineer</span> <br></br>
          turned<br></br>
          <span className="developer"> Software Developer</span>
        </h1>
        <Left>
          <Link to="/resume">
            <ResPreview
              onMouseEnter={() => setResume(awake)}
              onMouseLeave={() => setResume(sleepy)}
              className="main-nav theater"
              style={{
                fill: resume.fill,
                stroke: resume.stroke,
                transitionDuration: "01.2s",
              }}
            >
              <Resume className="resume-icon" />
            </ResPreview>
          </Link>
          <Link to="/about">
            <AboutPreview
              className="main-nav theater"
              onMouseEnter={() => setAbout(awake)}
              onMouseLeave={() => setAbout(sleepy)}
              style={{
                fill: about.fill,
                stroke: about.stroke,
                transitionDuration: "1.2s",
              }}
            >
              <About className="about-icon" />
            </AboutPreview>
          </Link>
        </Left>
        <Right>
          <Link to="/projects">
            <ProPreview
              className="main-nav"
              onMouseEnter={() => setCode(awake)}
              onMouseLeave={() => setCode(sleepy)}
              style={{
                fill: code.fill,
                stroke: code.stroke,
                transitionDuration: "1.2s",
              }}
            >
              <Code className="code-icon" />
            </ProPreview>
          </Link>
          <Link to="/food">
            <MiscPreview
              className="main-nav"
              onMouseEnter={() => setFood({ fill: "#D4B783", stroke: "white" })}
              onMouseLeave={() => setFood(sleepy)}
              style={{
                fill: food.fill,
                stroke: food.stroke,
                transitionDuration: "1.2s",
              }}
            >
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
            <Git className="icon scale-in-center" />
          </a>
          <a
            href="http://www.linkedin.com/in/AdamSmolenski"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn className="icon scale-in-center" />
          </a>
          <a href="http://www.dev.to/AmSmo" target="_blank" rel="noreferrer">
            <Dev className="icon scale-in-center" />
          </a>

          <a
            href="mailto:adam.smolenski@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Email className="icon scale-in-center" />
          </a>
        </Bottom>
        <GhostLight className="ghostlight" />
      </PreviewContainer>
    </>
  );
};

export default Home;
