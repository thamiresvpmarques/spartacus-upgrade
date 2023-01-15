import styled from "styled-components";
import BackgroundImg from "../../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";

export const Section = styled.section`
  position: relative;
  background: linear-gradient(rgb(40, 42, 53, 0.9), rgb(40, 42, 53, 0.9)),
    url(${BackgroundImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Title = styled.h2`
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-size: 3em;

  strong {
    color: #ef8226;
  }
`;
export const Paragraph = styled.p`
  color: #fff;
  font-size: 1em;
  margin-bottom: 20px;
  width: 70%;
`;
export const Btn = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 1em;
  padding: 16px 36px;
  font-weight: 600;
  border-radius: 50px;
  margin-top: 30px;
  transition: 0.25s;
  color: #fff;
  background-color: #ef8226;
  transition: 0.3s ease;

  :hover {
    background-color: rgb(207, 108, 10);
    letter-spacing: 3px;
  }
`;
