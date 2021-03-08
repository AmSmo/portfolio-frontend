import React, { useState } from "react";
import {
  AboutPreview,
  MiscPreview,
  ProPreview,
  ResPreview,
  PreviewContainer,
  Blurb,
} from "../styles/styles";
import "../styles/home.scss";
import { RouteComponentProps } from "react-router";

import { ReactComponent as Resume } from "../svgs/resume.svg";
import { ReactComponent as Code } from "../svgs/code.svg";
import { ReactComponent as Cookie } from "../svgs/cookie.svg";
import { ReactComponent as About } from "../svgs/about.svg";
import { withRouter } from "react-router-dom";
import ContactLinks from "../components/ContactLinks";
type HomeProps = RouteComponentProps & {};

type IconType = {
  stroke: "transparent" | "rgba(216, 212, 204, 0.651)";
  fill: "white" | "transparent" | "#D4B783";
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
          <span style={{ color: "black" }}>turned</span>
          <br></br>
          <span className="developer"> Software Developer</span>
        </h1>

        <ResPreview
          className="main-nav"
          onClick={() => history.push("/resume")}
          onMouseEnter={() =>
            setResume({ fill: "white", stroke: "rgba(216, 212, 204, 0.651)" })
          }
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
              boxShadow: "none",
            }}
          />
        </ResPreview>

        <AboutPreview
          className="main-nav"
          onClick={() => history.push("/about")}
          onMouseEnter={() =>
            setAbout({ fill: "white", stroke: "rgba(216, 212, 204, 0.651)" })
          }
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
              boxShadow: "none",
            }}
          />
        </AboutPreview>

        <ProPreview
          className="main-nav"
          onClick={() => history.push("/projects")}
          onMouseEnter={() =>
            setCode({ fill: "white", stroke: "rgba(216, 212, 204, 0.651)" })
          }
          onMouseLeave={() => setCode(sleepy)}
        >
          <Blurb>
            Read up on past projects of mine and enjoy some video walk-throughs.
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
              boxShadow: "none",
            }}
          />
        </ProPreview>

        <MiscPreview
          className="main-nav"
          onClick={() => history.push("/projects")}
          onMouseEnter={() => {
            setFood({ fill: "#D4B783", stroke: "rgba(216, 212, 204, 0.651)" });
            setCookieIndex(4);
          }}
          onMouseLeave={() => {
            setFood(sleepy);
            setCookieIndex(1);
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
              boxShadow: "none",
            }}
          />
        </MiscPreview>

        <ContactLinks />
      </PreviewContainer>
    </>
  );
};

export default withRouter(Home);
