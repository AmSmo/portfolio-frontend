import React from "react";
import { ProjectType } from "../util/customtypes";
import ReactPlayer from "react-player";
import { ReactComponent as WWW } from "../svgs/www.svg";
import { ReactComponent as Git } from "../svgs/github.svg";
type ProjectProps = {
  project: ProjectType | null;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (project === null) {
    return <div>Nothing to see Here</div>;
  } else {
    const renderLanguages = () => {
      return project.languages?.map((language, idx) => {
        return (
          <li key={idx}>
            <i className={language.icon}>{language.name}</i>
          </li>
        );
      });
    };
    return (
      <>
        <div id="links">
          {project.frontend ? (
            <>
              <a href={project.frontend} target="_blank" rel="noreferrer">
                <Git fill="blue" height="1.2rem" />
                Frontend
              </a>
            </>
          ) : null}
          {project.backend ? (
            <a href={project.backend} target="_blank" rel="noreferrer">
              <Git fill="blue" height="1.2rem" />
              Backend
            </a>
          ) : null}
          {project.deploy ? (
            <a href={project.deploy} target="_blank" rel="noreferrer">
              <WWW height="0.7em" fill="blue" />
              Deployment
            </a>
          ) : null}
        </div>
        <div id="video">
          {project.video ? (
            <ReactPlayer
              url={project.video}
              style={{ maxWidth: "800px", minHeight: "400px" }}
              height="auto"
            />
          ) : null}
        </div>
        <div id="desc">{project.description}</div>
        <div id="languages">{renderLanguages()}</div>
      </>
    );
  }
};

export default Project;
