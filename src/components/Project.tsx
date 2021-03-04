import React from "react";
import { ProjectType } from "../util/customtypes";
import ReactPlayer from "react-player";
import { ZoomCtrl } from "../styles/styles";
type ProjectProps = {
  project: ProjectType | null;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  if (project === null) {
    return <div>Nothing to see Here</div>;
  } else {
    const renderLanguages = () => {
      return project.languages?.map((language) => {
        return <li>{language.name}</li>;
      });
    };
    return (
      <div>
        <a href={project.frontend} target="_blank" rel="noreferrer">
          Frontend
        </a>
        <a href={project.backend} target="_blank" rel="noreferrer">
          Backend
        </a>

        <ReactPlayer url={project.video} />
        <div>{project.description}</div>
        <div>{renderLanguages()}</div>
      </div>
    );
  }
};

export default Project;
