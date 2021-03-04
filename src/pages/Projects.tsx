import React, { useState } from "react";
import ReactPlayer from "react-player";
import { ProjectBody } from "../styles/styles";
type ProjectsProps = {
  projects: [];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [projectVideoUrl, setProjectVideoUrl] = useState<string>(
    "https://www.youtube.com/watch?v=2Zdp6EV_bh4"
  );
  return (
    <ProjectBody>
      <ReactPlayer url={projectVideoUrl} />
    </ProjectBody>
  );
};

export default Projects;
