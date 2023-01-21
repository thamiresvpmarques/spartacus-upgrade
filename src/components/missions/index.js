import { FaComments } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import Students from "../../img/students.jpg";

import * as Styled from "./style";

export const Missions = () => {
  return (
    <Styled.Section>
      <Styled.BlockImgAndText>
        <Styled.Students src={Students} alt="estudantes" />
        <div>
          <Styled.TextMissions>
            <h3>Missão</h3>
            <p>
              Somos um meio de impacto e desenvolvimento local. Orientamos e
              preparamos para construirrem suas trajetórias. Fomentamos a
              vontade e pelo aprendizado e acreditamos no poder da paixão
              educação em mostrar e criar novas oportunidades para todos.
            </p>
          </Styled.TextMissions>

          <Styled.TextVision>
            <h3>Visão</h3>
            <p>
              Nosso objetivo para o futuro é construir uma rede de conexão entre
              a Educação Complementar, Mercado Empresarial e o suporte aos
              movimentos Políticos. Queremos ser uma solução privada de política
              pública, em busca do desenvolvimento local.
            </p>
          </Styled.TextVision>
        </div>
      </Styled.BlockImgAndText>

      <Styled.TextVerbs>
        <h2>Verbos</h2>
        <p>
          Spartacus é um empreendimento que acredita na ação, na conquista
          construída também de pequenas vitórias. A essência foi idealizada a
          partir de verbos porque estamos em movimento constante
        </p>
      </Styled.TextVerbs>

      <Styled.Block>
        <Styled.Text>
          <FaComments />
          <h3>Falar e Ouvir</h3>
          <p>
            Queremos que todos se sintam acolhidos e pertencentes. Valorizamos o
            indivíduo e criamos nosso coletivo a partir das diferenças.
            Reconhecemos o valor de diferentes vozes e histórias na nossa
            construção.
          </p>
        </Styled.Text>

        <Styled.Text>
          <FaTrophy />
          <h3>Transformar</h3>
          <p>
            Temos vontade, atitude e determinação. Gostamos de estar junto de
            pessoas que correm atrás, alcançam objetivos e vivem histórias
            inspiradoras ao lado de outras pessoas.
          </p>
        </Styled.Text>

        <Styled.Text>
          <FaHammer />
          <h3>Fazer</h3>
          <p>
            Fomentamos sonhos. Nascemos de narrativas inspiradoras e crescemos
            junto à elas. Acolhemos as pequenas vitórias e as tornamos grandes
            conquistas. Queremos transformar oportunidades em histórias reais.
          </p>
        </Styled.Text>
      </Styled.Block>
    </Styled.Section>
  );
};
