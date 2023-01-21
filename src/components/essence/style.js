import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 106px);

  @media screen and (max-width: 1400px) {
    height: 950px;
  }
  @media screen and (max-width: 992px) {
    height: 1200px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 10px;
`;
export const title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(35, 35, 85);
`;
export const Texts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 15px;
  flex-wrap: wrap;
`;
export const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 450px;
  height: 250px;
  padding: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 992px) {
    width: 300px;
    height: auto;
  }
  svg {
    font-size: 30px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    color: rgb(46, 46, 59);
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: rgb(70, 70, 87);
    text-align: center;
    padding: 10px 8px;
  }
`;
