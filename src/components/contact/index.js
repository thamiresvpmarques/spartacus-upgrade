import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import * as Styled from './style'

export const Contact = () => {
  return (
    <Styled.Footer>
      <p>Encontre-me nas redes sociais.</p>

      <Styled.Network>
      <a href="https://www.facebook.com/Spartacus-Consultoria-108930580865570">
        <AiFillFacebook />
      </a>

      <a href="https://www.instagram.com/spartacusconsultoria/">
        <BsInstagram />
      </a>
      
      <a href="https://api.whatsapp.com/send?phone=5521982375418&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%2C%20consegue%20me%20ajudar%3F">
        <AiOutlineWhatsApp />
      </a>
      </Styled.Network>
    </Styled.Footer>
  );
};
