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
import { withRouter } from "react-router-dom";
type HomeProps = RouteComponentProps & {};

type IconType = {
  stroke: "black" | "transparent" | "white" | "red";
  fill: "white" | "transparent" | "#D4B783" | "black" | "red";
};

const Home: React.FC<HomeProps> = (props) => {
  let sleepy: IconType = { stroke: "transparent", fill: "transparent" };
  let [about, setAbout] = useState<IconType>(sleepy);
  let [resume, setResume] = useState<IconType>(sleepy);
  let [food, setFood] = useState<IconType>(sleepy);
  let [code, setCode] = useState<IconType>(sleepy);
  let [cookieIndex, setCookieIndex] = useState<number>(3);
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
          <span style={{ color: "rgb(85,154,159)" }}>turned</span>
          <br></br>
          <span className="developer"> Software Developer</span>
        </h1>

        <ResPreview
          className="main-nav"
          onClick={() => history.push("/resume")}
          onMouseEnter={() => setResume({ fill: "white", stroke: "red" })}
          onMouseLeave={() => setResume(sleepy)}
        >
          <Blurb>
            With a decades worth of experience in Broadway, and a penchant for
            seeking out challenges. Check out my resume to see what I've done.
          </Blurb>
          <Resume
            className="svg-icon"
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
          className="main-nav"
          onClick={() => history.push("/about")}
          onMouseEnter={() => setAbout({ fill: "white", stroke: "red" })}
          onMouseLeave={() => setAbout(sleepy)}
        >
          <Blurb>
            Read a little about me here. Scroll through playbills from my past.
            Find out about how I ended up in code, and what technologies I'm
            working with.
          </Blurb>
          <About
            className="svg-icon"
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

        <ProPreview
          className="main-nav"
          onClick={() => history.push("/projects")}
          onMouseEnter={() => setCode({ fill: "white", stroke: "red" })}
          onMouseLeave={() => setCode(sleepy)}
        >
          <Blurb>
            Read up on past projects of mine and enjoy some video walk throughs.
            Watching the videos you may understand how I ended up backstage.
          </Blurb>
          <Code
            className="svg-icon"
            style={{
              fill: code.fill,
              stroke: code.stroke,
              transitionDuration: "1.2s",
              zIndex: 3,
              marginBottom: 0,
              position: "absolute",
            }}
          />
        </ProPreview>

        <MiscPreview
          className="main-nav"
          onClick={() => history.push("/projects")}
          onMouseEnter={() => {
            setFood({ fill: "#D4B783", stroke: "red" });
            setCookieIndex(4);
          }}
          onMouseLeave={() => {
            setFood(sleepy);
            setCookieIndex(3);
          }}
        >
          <Blurb style={{ zIndex: 4 }}>
            A project in a project... Eventually this will keep track of what
            I'm cooking and baking.
          </Blurb>
          <Cookie
            onClick={() => history.push("/food")}
            className="svg-icon"
            style={{
              fill: food.fill,
              stroke: food.stroke,
              transitionDuration: "1.2s",
              zIndex: cookieIndex,
              marginBottom: 0,
              position: "absolute",
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
