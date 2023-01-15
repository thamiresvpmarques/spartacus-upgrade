import styled from "styled-components";

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 align-items:center ;
 justify-content: center;
 height: 450px;
`;
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    gap:10px;
    width: 80%;
`
export const title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: rgb(35, 35, 85);
    `
export const BoxInformation = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
    background-color:#FFF;
    text-align: center;
    width: 550px;
    height:250px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    padding: 10px;

    svg{
      font-size: 30px;
    }

    h3{
      font-size: 1.2rem;
      font-weight: 600;
      color: rgb(46, 46, 59);
      padding: 10px 0;
    }

    p{
      font-size: 0.9rem;
      font-weight: 400;
      color: rgb(70, 70, 87);
      text-align: center;
      padding: 10px 8px;
    }
`
