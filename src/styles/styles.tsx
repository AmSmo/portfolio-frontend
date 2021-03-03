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
  span {
    border-radius: 15px;
    width: 2rem;
    padding: 0 1.2rem;
    margin: 10px;
    display: inline;
    background: #28539c;
    color: white;
    border: 0.5px solid black;
    box-shadow: 2px 2px 7px black;
    z-index: 20;
    cursor: pointer;
    :active {
      box-shadow: 1px 1 px 2px black;
      transition: 0.2s;
    }
    :hover {
      color: #cfa9a9;
      background: #214b94;
      transition-duration: 0.7s;
    }
  }
`;
