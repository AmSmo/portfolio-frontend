import React, { useState } from "react";

import { ShowType } from "../util/customtypes";

import languages from "../util/languages.json";
import credits from "../util/credits.json";
import "../styles/about.scss";
import ContactLinks from "../components/ContactLinks";
type AboutProps = {
  shows: [ShowType] | null;
};

const About: React.FC<AboutProps> = ({ shows }) => {
  const [currentShow, setCurrentShow] = useState<ShowType>({
    name: "Adam Smolenski",
    playbill: "./Static/me.jpg",
  });
  const renderLanguages = () => {
    return languages.map((language, idx) => {
      return (
        <li key={idx}>
          <i className={language.icon}>{language.name}</i>
        </li>
      );
    });
  };
  const renderCredits = () => {
    return credits.map((credit, idx) => {
      return (
        <li key={idx} className="left" onClick={() => setCurrentShow(credit)}>
          {credit.name}
        </li>
      );
    });
  };

  return (
    <>
      <div id="aboutgrid">
        <div id="title">
          <h3>Adam Smolenski</h3>
          <p style={{ marginTop: "0px", paddingTop: "0px" }}>
            Broadway Audio Engineer...{" "}
          </p>

          <p>and Web Developer</p>
        </div>

        <div id="frameworks">
          <h3>A couple things I work with:</h3>
          <ul>{renderLanguages()}</ul>
        </div>
        <div id="playbill">
          <img src={currentShow.playbill} alt={currentShow.name} />
        </div>
        <div id="credits">
          <h3>Theater Credits:</h3>
          <ul>{renderCredits()}</ul>
        </div>
        <div id="bio">
          <h3>About Me</h3>
          <section>
            Started my career in theater at 15. Working freelance starting in
            off off off broadway. It was really off, The first two shows I
            remember working were "Imperfect Chemistry" at the Minetta Lane
            Theater, and "Children's Letters to God" at what I recall as the
            Lambs Theater. Went to school for Educational Psychology, with high
            hopes of working in curiculum development for the Sesame Workshop.
            However, I ended up going back to theater 3 days after my final exam
            of University. Started out at the Mitzi E. Newhouse Theater, which
            was Lincoln Center's smallest theater at the time with about 300
            seats. Worked there for a few years until I qualified for a union
            card. After becoming a proud member of Local One, I ended up moving
            upstairs to the Vivian Beaumount, Lincoln Center's Broadway Space.
            Worked under Marc Salzberg who was the Head of Audio in that theater
            for a number of years. Learned alot on the job and from my boss.
          </section>
          <br></br>
          <section>
            Several more years went by, and I was able to prove myself as a
            stagehand and Audio Engineer. When Marc retired, I was again
            promoted to Head of Audio. I've led quite a few interesting
            productions at that theater to this date. I have always freelanced
            on the side. Learning as much as I can and working on as many
            projects as possible. I loved what I did.
          </section>
          <br></br>
          <section>
            So I have found myself in the world of code now. A lot of the same
            troubleshooting methods apply, always a problem to be solved, and
            you're always trying to do something new. Every iteration gets
            better, that's what I did in theater and continue to do now. At the
            beginning of the pandemic, I took coding more seriously teaching
            myself a few Python frameworks, and then went off to a bootcamp.
            Flatiron taught me Ruby/Rails, React/Redux... all those good R
            things... well not R. So I have started freelancing and teaching
            myself more skills since then. Always on the look out for better
            ways of doing things... the cursed line of "We always did it this
            way" is as bad in code as it is in the theater.
            <br></br>
            <br></br>
            My interests still lie in entertainment and food, so all my side
            projects end up around those themes, but taking every programming
            challenge as they come.
          </section>
        </div>
      </div>

      <ContactLinks />
    </>
  );
};

export default About;
