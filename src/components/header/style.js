import styled from "styled-components";

export const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  background: ${(props) => props.headerColor};
  position: sticky;
  top: 0;
  z-index: 999;

  nav ul {
    display: flex;
  }

  input {
    display: none;
  }

  .menu {
    display: none;
    width: 65px;
    height: 60px;
  }

  .hamburguer {
    background-color: ${(props) => (props.pathName === "/" ? "#fff" : "black")};
    position: relative;
    display: block;
    width: 30px;
    height: 2px;
    top: 50px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer::before,
  .hamburguer::after {
    background-color: ${(props) => (props.pathName === "/" ? "#fff" : "black")};
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    content: " ";
    transition: 0.2s ease-in-out;
  }

  .hamburguer::before {
    top: -9px;
  }

  .hamburguer::after {
    bottom: -9px;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer::before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer::after {
    transform: rotate(90deg);
    bottom: 0;
  }

  @media (max-width: 900px) {
    .menu {
      display: block;
    }

    nav ul {
      display: none;
    }

    input:checked ~ ul {
      display: flex;
      height: 90vh;
      width: 100vw;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin-top: 20px;
    }

    nav {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
    }

    ul {
      box-shadow: -3px 7px 5px 1px rgba(0, 0, 0, 0.034);
      background: ${(props) => props.headerColor};
    }

    ul li {
      display: block;
      text-align: center;
      width: 200px;
      padding: 20px;
    }

    ul li a {
      font-size: 25px;
    }

    .links a {
      margin-left: 0px;
    }

    label {
      display: flex;
      flex-direction: column;
    }

    label div {
      align-self: flex-end;
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  color: ${({ theme }) => theme.standardColor};
`;
export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;
export const Options = styled.li`
  list-style: none;
`;
export const LinkStyled = styled("a")`
  color: ${({ theme }) => theme.standardColor};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;
