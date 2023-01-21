import { useEffect, useState } from "react";
import logo from "../../img/logo_mantenedores-branco.png";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useLocation } from "react-router-dom";

import * as Styled from "./style";

export const Header = () => {
  const [headerColor, setHeaderColor] = useState(
    "linear-gradient(rgb(40,42,53,0.9),rgb(40,42,53,0.9))"
  );
  const transparentHeader =
    "linear-gradient(rgb(40,42,53,0.9),rgb(40,42,53,0.9))";

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setHeaderColor("#4152a0")
      : setHeaderColor(transparentHeader);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const { width } = useWindowSize();

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (width >= 425) {
      setMenu(false);
      return;
    }
  }, [width]);

  const pathName = useLocation().pathname;
  return (
    <Styled.Header headerColor={headerColor}>
      <Styled.Logo src={logo} pathName={pathName} alt="logo Spartacus" />
      <nav>
        <input
          type="checkbox"
          name="menu-hamburguer"
          id="menu-hamburguer"
          checked={menu}
          onChange={() => setMenu((prev) => !prev)}
        />

        <label for="menu-hamburguer">
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <Styled.Menu>
          <Styled.Options>
            <Styled.LinkStyled href="/" pathName={pathName}>
              Home
            </Styled.LinkStyled>
          </Styled.Options>

          <Styled.Options>
            <Styled.LinkStyled href="/essence" pathName={pathName}>
              Essência da marca
            </Styled.LinkStyled>
          </Styled.Options>

          <Styled.Options>
            <Styled.LinkStyled href="/missions" pathName={pathName}>
              Missão, visão e verbos
            </Styled.LinkStyled>
          </Styled.Options>

          <Styled.Options>
            <Styled.LinkStyled href="/form" pathName={pathName}>
              Fale conosco
            </Styled.LinkStyled>
          </Styled.Options>
        </Styled.Menu>
      </nav>
    </Styled.Header>
  );
};
