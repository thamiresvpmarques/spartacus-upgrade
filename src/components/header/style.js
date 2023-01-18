import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0vw 8vw;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  top:0;
  transition: 0.5s;
  background-color: ${(props) => (props.headerColor)};
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Options = styled.li`
  list-style: none;

  a{
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    transition: 0.3s ease;
    margin-left: 40px;
}
  a:hover{
    color: ${({theme}) => theme.hover};
  }
  
`
