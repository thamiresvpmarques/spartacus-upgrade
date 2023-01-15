import { Header } from "../header";
import * as Styled from "./style";

export const Home = () => {
  return (
    <Styled.Section>
      <Header />
     <Styled.Title>
        Nós somos <strong>transformação</strong>
      </Styled.Title>
      
      <Styled.Paragraph>
        Queremos ser o começo de um caminho de oportunidades, mostrar a direção
        que nunca foi dada. Somos inspirados pela vontade de fazer. Nossa missão
        é mostrar que existe um futuro cheio de impacto, diversidade,
        coletividade e superação para cada um dos nossos guerreiros.
      </Styled.Paragraph>

      <Styled.Paragraph>
        Nosso compromisso é com a paixão de aprender, acreditamos em um ensino
        que envolve e motiva. Valorizamos e acreditamos em todas as trajetórias:
        nós nascemos da mistura das nossas raízes com o novo, nascemos da luta
        que nos ergue.
      </Styled.Paragraph>
      <Styled.Paragraph>
        Nós não queremos só dar aula, queremos capacitar pessoas. Nossa essência
        é acolher, se adaptar e crescer com as diferenças. Somos feitos de com
        quem convivemos, de com quem trocamos experiências, conhecimentos, salas
        de aula, corredores, visões e vontades.
      </Styled.Paragraph>
      
      <Styled.Btn href="#formulario ">Cadastre-se</Styled.Btn>
    </Styled.Section>
  );
};
