import * as Styled from "./style";

export const Form = () => {
  return (
    <Styled.Section>
      <Styled.TitleContainer>
        <h2>Fale Conosco</h2>
        <p>Cadastre-se e entraremos em contato com você em breve:</p>
      </Styled.TitleContainer>
      <Styled.Container>
      <Styled.Form
        action="https://gmail.us14.list-manage.com/subscribe/post?u=dc53f199e9db02f673c7a6c27&amp;id=1948e314a0&amp;f_id=009ef1e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <label for="nome">
          <strong>Nome</strong>
        </label>
        <input
          type="text"
          name="FNAME"
          id="nome"
          required
          placeholder="Nome.."
        />
        <label for="sobrenome">
          <strong>Sobrenome</strong>
        </label>
        <input
          type="text"
          name="LNAME"
          id="sobrenome"
          required
          placeholder="Sobrenome.."
        />
        <label for="email">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          name="EMAIL"
          id="email"
          required
          placeholder="Email.."
        />
        <label for="telefone">
          <strong>Telefone</strong>
        </label>
        <input
          type="tel"
          name="TELEFONE"
          id="telefone"
          required
          placeholder="(21)99999-9999"
          pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
        />
        <label for="rede_social">
          <strong>Como Conheceu a Spartacus ?</strong>
        </label>
        <select id="rede_social" name="REDESOCIAL" required>
          <option selected disabled value="">
            Selecione
          </option>
          <option value="Indicação">Indicação</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Cliente Reincidente">Cliente Reincidente</option>
        </select>
        <label for="tipo_contratacao">
          <strong>Interesse de Contratação</strong>
        </label>
        <select id="tipo_contratacao" name="INTERESSE" required>
          <option selected disabled value="">
            Selecione
          </option>
          <option value="Consultoria Empresarial">
            Consultoria Empresarial
          </option>
          <option value="Assessoria Política">Assessoria Política</option>
          <option value="Cursos Preparatórios">Cursos Preparatórios</option>
        </select>
        
        <input type="submit" value="Enviar" />
      </Styled.Form>
      
      <Styled.Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.202050566963!2d-43.345919285232554!3d-22.832013040946777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996358b240e555%3A0x3e5c7d69f4b662b7!2sEstacionamento%20-%20Av.%20Pastor%20Martin%20Luther%20King%20J%C3%BAnior%2C%20126%20-%20Del%20Castilho%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020760-005!5e0!3m2!1spt-BR!2sbr!4v1658530181760!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Styled.Map>

      </Styled.Container>
      
    </Styled.Section>
  );
};
