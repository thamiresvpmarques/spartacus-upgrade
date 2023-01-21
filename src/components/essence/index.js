import { FaGraduationCap } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import * as Styled from "./style";

export const Essence = () => {
  return (
    <Styled.Section>
      <Styled.title>Essência da marca</Styled.title>
      <span>Recursos chaves do nosso projeto.</span>

      <Styled.Container>
        <Styled.Texts>
          <Styled.BoxInformation>
            <FaGraduationCap />
            <h3>Spartacus Educação</h3>
            <p>
              Unidade de Negócio focada no oferecimento de cursos e treinamentos
              complementares a educação básica. Tendo como direcionamento o
              suporte aos Jovens e Adultos em sua qualificação profissional,
              alinhando aptidões naturais e conexões fortalecidas.
            </p>
          </Styled.BoxInformation>
          <Styled.BoxInformation>
            <FaChartBar />
            <h3>Spartacus Consultoria Empresarial</h3>
            <p>
              Unidade de Negócio focada no aconselhamento técnico de pessoas
              físicas e jurídicas nas questões referentes a gestão de seus
              negócios. Tendo como foco de atuação o suporte as áreas de
              Backoffice do negócio, dando maior possibilidade aos
              empreendedores de atuarem com o que realmente seja o objetivo do
              empreendimento.
            </p>
          </Styled.BoxInformation>
          <Styled.BoxInformation>
            <FaUsers />
            <h3>Spartacus Assessoria Política</h3>
            <p>
              Unidade de Negócio focada na instrução, formação e gerenciamento
              de campanhas políticas. Tendo como principal objetivo o
              direcionamento estratégico e o engajamento de lideranças locais no
              processo políticio nacional.
            </p>
          </Styled.BoxInformation>
        </Styled.Texts>
      </Styled.Container>
    </Styled.Section>
  );
};
