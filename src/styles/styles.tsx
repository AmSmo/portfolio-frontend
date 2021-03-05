import styled from "styled-components";

export const Nav = styled.nav`
  height: 2em;
  width: 100vw;
  background: #d65151;
  font-weight: 600;
  display: flexbox;
  justify-content: space-space-between;
  color: #ffffff;
  position: fixed;
  z-index: 10;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  @media (orientation: portrait) {
    font-size: 18px;
  }
`;

export const NavButton = styled.p`
  text-align: center;
  margin: auto;
`;

export const RemBody = styled.section`
  margin: 5px auto;
  text-align: center;
  width: 100vw;
  display: flexbox;
  justify-content: center;
  margin-top: 30px;
  z-index: 3;
`;

export const ZoomCtrl = styled.div`
  display: block;
  font-size: 3rem;
  margin-top: 0.5rem;
  width: 98vw;
  margin-right: auto;
  text-align: right;
  height: 2.2rem;
  span.print {
    text-align: left;
    margin: 0px;
  }
  span {
    border-radius: 15px;
    width: 2rem;
    padding: 0 1rem;
    margin: 10px;
    display: inline;
    background: #28539c;
    color: white;
    border: 0.5px solid black;
    box-shadow: 5px 5px 7px black;
    z-index: 20;
    cursor: pointer;
    &:active {
      box-shadow: 2px 2px 5px black;
    }
    &:hover {
      color: #cfa9a9;
      background: #214b94;
      transition-duration: 0.4s;
    }
  }
`;
export const ResPreview = styled.div``;
export const AboutPreview = styled.div``;
export const ProPreview = styled.div``;
export const MiscPreview = styled.div``;
export const PreviewContainer = styled.main`
  display: flexbox;
  flex-wrap: wrap;
  padding-top: 3rem;
  width: 100vw;
  height: 97vh;
  background-image: url("./static/theater.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  div.main-nav {
    box-shadow: 5px 5px 20px white;
    background: rgba(73, 73, 161, 0.829);
    height: 20vh;
    min-height: 160px;
    width: 25vw;
    min-width: 150px;
    border: 2px solid #161515;
    border-radius: 15px;
    margin: 40px;
    :hover {
      box-shadow: 3px 3px 10px white;
      transform: rotate3d(0, 0, 0, 0);
      transition-duration: 0.5s;
      background: rgba(73, 73, 161, 1);
    }
  }
  section {
    padding-top: 3rem;
  }
  @media (max-width: 640px), (max-height: 500px) {
    justify-content: center;
    height: 100vh;
    section {
      padding-top: 0;
    }
  }
  @media (max-width: 480px) {
    height: 100%;
  }
`;

export const Left = styled.section`
  div {
    padding-top: 30px;
    transform: rotate3d(30, -30, -15, 30deg);
  }
  @media (max-width: 640px), (max-height: 500px) {
    div {
      width: 70vw;
      margin: 20px auto;
      height: 300px;
      transform: rotate3d(0, 0, 0, 0);
    }
  }
`;
export const Right = styled.section`
  div {
    padding-top: 30px;
    transform: rotate3d(-30, -30, 15, 30deg);
  }
  right: 0px;
  position: absolute;

  @media (max-width: 640px), (max-height: 500px) {
    position: relative;
    padding-top: 10px;
    div {
      text-align: center;
      display: block;
      width: 70vw;
      margin: 20px auto;
      height: 300px;
      transform: rotate3d(0, 0, 0, 0);
    }
  }
`;
export const Bottom = styled.div`
  width: 100vw;
  padding-bottom: 8px;
  :hover {
    box-shadow: 0px 0px 0px white;
  }
`;

export const ProjectBody = styled.section`
  width: 95vw;
  display: flexbox;
  text-align: center;
  justify-content: center;
`;

export const ProjectLeft = styled.div`
  height: 100vh;
  align-content: flex-start;
  width: 20vw;
  left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  position: fixed;
  border-right: 1px solid black;
  background: white;
  h3 {
    text-align: center;
    width: 100%;
    text-decoration: underline;
    margin: 5px 0 0 0;
  }
`;

export const ProjectUL = styled.ul`
  padding-left: 20px;
  li {
    text-align: left;
    display: block;
    width: min-content;
    padding: 3px;
    cursor: pointer;
  }
`;
