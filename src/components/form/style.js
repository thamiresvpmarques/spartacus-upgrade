import styled from "styled-components";

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 height: 850px;
 width: 100%;
  h2{
    color:${({theme}) => theme.mainColor}
  }

`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`
export const Container = styled.div`
 display: flex;
 gap:40px;
`
export const Form = styled.form`
 display: flex;
 flex-direction: column;
 color:#4152a0;
 padding-bottom: 20px; 
 
 input{
    font-size: 1em;
    border-radius: 5px;
    width: 650px;
 }
 input[type=text], input[type=email], input[type=tel], select{
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border: 1px solid #4152a0;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    outline: none;
}

input[type=submit] {
    background-color: #4152a0;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    width: 100px;
}

input[type=submit]:hover {
    background-position: left bottom;
}
 select{
    font-size: 1em;
    border-radius: 5px;
    
 }
`
export const Map = styled.div`
  display: flex;
  align-items: center;
`