import styled from "styled-components";

export const Nav = styled.nav`
  height: 2em;
  width: 100vw;
  max-width: 100%;
  background: white;
  color: #a66b6a;
  border-bottom: 0.5px solid lightgrey;
  box-shadow: 0 2px 2px -2px gray;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 9999 !important;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  @media (orientation: portrait) {
    font-size: 18px;
  }
`;

export const NavStyle = styled.p`
  text-align: center;
  margin: auto;
  position: relative;
  z-index: 30;
`;

export const RemBody = styled.section`
  margin: 5px auto;
  text-align: center;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  z-index: 11;
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

export const Blurb = styled.div`
  display: inline;
  color: #110101;
  background: rgba(207, 200, 200, 0.9);
  border-radius: 10px;
  font-weight: 600;
  margin: 15px 10px;
  padding: 10px 5px;
  width: 60%;
  margin: 20px;
  height: min-content;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
    width: 75%;
  }
  @media (max-width: 480) and (orientation: portait) {
    font-size: 1.1rem;
    width: 75%;
  }
`;
export const Container = styled.div`
  background: #56a3a6;
  border-radius: 10px;
  padding: 20px;
  margin: 10vh 0;
  border: 1px #858080 solid;
  box-shadow: 1px 3px 5px #4f6d7a;
  width: 65vw;
  display: flex;
`;
export const ResPreview = styled.div`
  display: flex;
  background-image: url("./Static/typewriter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  width: 80vw;
  height: 30vh;
`;
export const AboutPreview = styled.div`
  background-image: url("./Static/theater.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
`;
export const ProPreview = styled.div`
  background-image: url("./Static/screen.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
`;
export const MiscPreview = styled.div`
  background-image: url("./Static/baked.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
`;
export const PreviewContainer = styled.main`
  h1 {
    width: 100vw;
    color: white;
  }
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  position: relative;
  background: rgb(247, 244, 244);
  background-size: 100vh;
  justify-content: center;
  @media (max-width: 640px), (max-height: 500px) {
    justify-content: center;
    height: 100vh;
    max-height: 100%;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
`;

export const Bottom = styled.div`
  z-index: 3;
  width: 100vw;
  max-width: 100%;
  margin-bottom: 100px;
  :hover {
    box-shadow: 0px 0px 0px white;
  }
`;
export const AboutBottom = styled.div`
  width: 98vw;
  justify-content: center;

  .icon {
    height: 60px;
  }
  :hover {
    box-shadow: 0px 0px 0px white;
  }
`;

export const ProjectBody = styled.section`
  width: 95vw;
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const ProjectLeft = styled.div`
  height: 100vh;
  max-height: 100%;
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
  overflow-y: scroll;
  li {
    text-align: left;
    display: block;
    width: min-content;
    padding: 10px;
    cursor: pointer;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FoodBody = styled.div`
  display: block;
  margin: auto;
  height: 70vh;
`;

export const Main = styled.div`
  position: relative;
  padding-top: 3rem;
  @media (max-width: 640px) {
    padding-top: 2rem;
  }
`;

export const LoginCenter = styled.div`
  margin:auto;
  padding-top: 100px;
`