import { useEffect, useState } from "react";
import logo from "../../img/logo_mantenedores-branco.png";
import { Link } from "react-router-dom";
import * as Styled from "./style";


export const Header = () => {
  const [headerColor, setHeaderColor] = useState("");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeaderColor('#4152a0') : setHeaderColor("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  
  return (
    <Styled.Nav headerColor={headerColor}>
      <Styled.Logo src={logo} alt="logo Spartacus" />
    
      <Styled.Menu>
        <Styled.Options>
          <a href="#">Home</a>
        </Styled.Options>
        <Styled.Options>
          <a href="#">Essência da marca</a>
        </Styled.Options>
        <Styled.Options>
          <a href="#">Missão, visão e verbos</a>
        </Styled.Options>
        <Styled.Options>
          <a href="#">Fale conosco</a>
        </Styled.Options>
      </Styled.Menu>
      
    </Styled.Nav>
    
  );
};
