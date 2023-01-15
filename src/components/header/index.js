import logo from '../../img/logo_mantenedores-branco.png';
import * as Styled from './style'

export const Header = () =>{
    return(
        <Styled.Nav>
            <Styled.Logo src={logo} alt="logo Spartacus"/>
            <div></div>
            <Styled.Menu>
                <Styled.Options><a href="#home">Home</a></Styled.Options>
                <Styled.Options><a href="#features">Essência da marca</a></Styled.Options>
                <Styled.Options><a href="#base">Missão, visão e verbos</a></Styled.Options>
                <Styled.Options><a href="#contact">Fale conosco</a></Styled.Options>
            </Styled.Menu>
        </Styled.Nav>
    )
}