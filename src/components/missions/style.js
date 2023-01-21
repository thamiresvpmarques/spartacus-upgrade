import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 1000px;
  margin-top: 40px;
  height: calc(100vh - -250px);
  p {
    text-align: center;
  }
  @media screen and (max-width: 1400px) {
    height: 1800px;
  }
  @media screen and (max-width: 600px) {
    height: 2000px;
  }
`;
export const BlockImgAndText = styled.div`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const TextMissions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.mainColor};
  box-shadow: 8px 8px 10px rgba(10, 10, 10, 0.15);
  color: ${({ theme }) => theme.standardColor};
  max-width: 550px;
  height: 220px;
  border-radius: 100px 100px 2px 70px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 250px;
  }
`;
export const TextVision = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
  box-shadow: 8px 8px 10px rgba(10, 10, 10, 0.15);
  color: ${({ theme }) => theme.standardColor};
  max-width: 550px;
  height: 220px;
  border-radius: 100px 100px 2px 70px;
  padding: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 250px;
  }
`;
export const TextVerbs = styled.div`
  margin: 50px;
  width: 850px;
  text-align: center;

  h2 {
    color: rgb(35, 35, 85);
    font-size: 35px;
    font-weight: 400;
  }
  @media screen and (max-width: 992px) {
    width: 300px;
    height: 250px;
    margin: 20px;
    height: 200px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  height: 250px;
  padding: 10px;
  max-width: 450px;
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  svg {
    font-size: 30px;
  }

  @media screen and (max-width: 992px) {
    width: 300px;
    height: 250px;
  }
`;
export const Students = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;

  @media screen and (max-width: 1400px) {
    width: 450px;
    height: 350px;
    text-align: center;
  }
  @media screen and (max-width: 992px) {
    width: 350px;
    height: 250px;
  }
`;
