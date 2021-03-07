import React, { useState } from "react";
import {
  AboutPreview,
  MiscPreview,
  ProPreview,
  ResPreview,
  PreviewContainer,
  Bottom,
  Blurb,
} from "../styles/styles";
import "../styles/home.scss";
import { RouteComponentProps } from "react-router";
import { ReactComponent as Dev } from "../svgs/dev.svg";
import { ReactComponent as LinkedIn } from "../svgs/linkedin.svg";
import { ReactComponent as Git } from "../svgs/github.svg";
import { ReactComponent as Email } from "../svgs/email.svg";
import { ReactComponent as Resume } from "../svgs/resume.svg";
import { ReactComponent as Code } from "../svgs/code.svg";
import { ReactComponent as Cookie } from "../svgs/cookie.svg";
import { ReactComponent as About } from "../svgs/about.svg";
import { Link, withRouter } from "react-router-dom";
type HomeProps = RouteComponentProps & {};

type IconType = {
  stroke: "red" | "transparent" | "white";
  fill: "white" | "transparent" | "#D4B783" | "black";
};

const Home: React.FC<HomeProps> = (props) => {
  let sleepy: IconType = { stroke: "transparent", fill: "transparent" };
  let awake: IconType = { stroke: "red", fill: "white" };
  let [about, setAbout] = useState<IconType>(sleepy);
  let [resume, setResume] = useState<IconType>(sleepy);
  let [food, setFood] = useState<IconType>(sleepy);
  let [code, setCode] = useState<IconType>(sleepy);
  let { history } = props;
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

        <ResPreview
          className="main-nav"
          onClick={() => history.push("/resume")}
          onMouseEnter={() => setResume({ fill: "black", stroke: "white" })}
          onMouseLeave={() => setResume(sleepy)}
        >
          <Blurb>
            With a decades worth of experience in Broadway, and a penchant for
            seeking out challenges. Check out my resume to see what I've done.
          </Blurb>
          <Resume
            className="resume-icon"
            style={{
              fill: resume.fill,
              stroke: resume.stroke,
              transitionDuration: "1.2s",
              zIndex: 3,
              marginBottom: 0,
              position: "absolute",
            }}
          />
        </ResPreview>

        <AboutPreview
          onClick={() => history.push("/about")}
          className="main-nav right-card"
          onMouseEnter={() => setAbout({ fill: "black", stroke: "white" })}
          onMouseLeave={() => setAbout(sleepy)}
        >
          <Blurb>
            Read a little about me here. Scroll through some playbills from my
            past. Read about how I ended up in code, and see some technologies
            I'm working with.
          </Blurb>
          <About
            className="about-icon"
            style={{
              fill: about.fill,
              stroke: about.stroke,
              transitionDuration: "1.2s",
              zIndex: 3,
              marginBottom: 0,
              position: "absolute",
            }}
          />
        </AboutPreview>

        <ProPreview className="main-nav left-card">
          <Code
            className="code-icon"
            onClick={() => history.push("/projects")}
            style={{
              fill: code.fill,
              stroke: code.stroke,
              transitionDuration: "1.2s",
              zIndex: 3,
            }}
          />
        </ProPreview>

        <MiscPreview className="main-nav right-card">
          <Cookie
            onClick={() => history.push("/food")}
            className="resume-icon"
            style={{
              fill: food.fill,
              stroke: food.stroke,
              transitionDuration: "1.2s",
            }}
          />
        </MiscPreview>

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
      </PreviewContainer>
    </>
  );
};

export default withRouter(Home);
