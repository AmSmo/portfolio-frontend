import React from "react";
import {
  AboutPreview,
  MiscPreview,
  ProPreview,
  ResPreview,
  PreviewContainer,
  Left,
  Right,
} from "../styles/styles";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <PreviewContainer>
      <Left>
        <ResPreview>Resume</ResPreview>
        <AboutPreview>About</AboutPreview>
      </Left>
      <Right>
        <ProPreview>LALA</ProPreview>
        <MiscPreview>LALA</MiscPreview>
      </Right>
    </PreviewContainer>
  );
};

export default Home;
