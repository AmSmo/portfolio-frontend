import React, { useState } from "react";
import Project from "../components/Project";

import { ProjectBody, ProjectUL } from "../styles/styles";
import { ProjectType } from "../util/customtypes";
type ProjectsProps = {
  projects: [ProjectType] | null;
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const renderList = () => {
    return projects?.map((project) => {
      return <li onClick={() => setCurrentProject(project)}>{project.name}</li>;
    });
  };
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    projects ? projects[0] : null
  );
  return (
    <ProjectBody>
      <ProjectUL>{renderList()}</ProjectUL>
      <Project project={currentProject} />
    </ProjectBody>
  );
};

export default Projects;
