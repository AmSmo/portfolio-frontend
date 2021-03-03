import styled from "styled-components";

export const Nav = styled.nav`
  height: 2em;
  width: 100vw;
  background: #d65151;
  font-weight: 600;
  display: flexbox;
  justify-content: space-between;
  color: #ffffff;
`;

export const NavButton = styled.p`
  width: 20vw;
  text-align: center;
  margin: 0.4em;
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
  width: 100vw;
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
  width: 100vw;
  background-image: url("./static/theater.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  div:hover {
    box-shadow: 3px 3px 10px white;
    transform: rotate3d(0, 0, 0, 0);
    transition-duration: 0.5s;
  }
`;

export const Left = styled.section`
  div {
    height: 20vh;
    min-height: 200px;
    width: 25vw;
    min-width: 150px;
    border: 2px solid #161515;
    background: #4949a1;
    border-radius: 15px;
    margin: 40px;
    transform: rotate3d(30, -30, -15, 30deg);
    box-shadow: 5px 5px 20px white;
  }
`;
export const Right = styled.section`
  div {
    height: 20vh;
    min-height: 200px;
    width: 25vw;
    min-width: 150px;
    border: 2px solid #161515;
    background: #4949a1;
    border-radius: 15px;
    margin: 40px;
    transform: rotate3d(-30, -30, 15, 30deg);
    box-shadow: 5px 5px 20px white;
  }
  right: 0px;
  position: absolute;
`;
