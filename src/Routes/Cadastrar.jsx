import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-toSalvoBlue.png";
import { schemaCadastro } from "../Schema/schemas";
import { useState } from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="modal"
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          Termos de Uso
        </Modal.Title>
      </Modal.Header>
      <Modal.Body centered>
        <p>
          Estes são os termos e condições de uso do site ToSalvo localizado. Ao
          acessar este site, você concorda com os termos e condições descritos
          abaixo. O site utiliza cookies para personalizar sua experiência na
          internet e, ao acessá-lo, você concorda com o uso dos cookies
          necessários.{" "}
        </p>
        <p>
          Os cookies são arquivos de texto colocados em seu disco rígido por um
          servidor de página da web. O site pode utilizar cookies para coletar,
          armazenar ou rastrear informações para fins estatísticos e de
          marketing. Você tem a opção de aceitar ou rejeitar cookies opcionais,
          mas alguns cookies obrigatórios são necessários para a operação do
          site e aceitá-los significa também aceitar cookies de terceiros.{" "}
        </p>
        <p>
          ToSalvo e seus licenciadores têm os direitos de propriedade
          intelectual de todos os materiais postados no ToSalvo. Você não tem
          permissão para copiar, vender, alugar, sublocar, reproduzir, duplicar,
          copiar ou redistribuir os materiais do ToSalvo.
        </p>
        <p>
          Certas organizações,como agências governamentais, mecanismos de busca,
          organizações demídia e empresas credenciadas, podem criar links para o
          site sem a aprovação prévia por escrito. No entanto, o link não deve
          ser enganoso e falsamente implicar qualquer patrocínio, endosso ou
          aprovação pelo ToSalvo.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}
const cadastrar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // utilizado para capturar erroros de dados,
    formState: { isSubmitted, isValid },
  } = useForm({
    // apenas verifica os campos quando ocorrer o Submit
    mode: "onSubmit",
    resolver: yupResolver(schemaCadastro),
  });

  const form_result = (data) => {
    console.log(data);
  };
  const [showSenha, setSenha] = useState("bi bi-eye-slash");
  const [showInputType, setInputType] = useState("password");
  const [modalShow, setModalShow] = useState(false);

  const handleToggleSenha = () => {
    setSenha((prevState) =>
      prevState === "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash"
    );

    setInputType((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };
  return (
    <>
      <GlobalStyle />
      <div className="cadastro">
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(form_result)} className="cadastro-forms">
          <div className="nome-campo">
            <label htmlFor="email">
              <i class="bi bi-person"></i>Nome :
            </label>
            <input {...register("nome")} name="nome" />

            <p className="error-txt">{errors.nome?.message}</p>
          </div>
          <div className="email-campo">
            <label htmlFor="email">
              <i class="bi bi-envelope"></i>Email :
            </label>
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="exemplo@maua.br"
            />

            <p className="error-txt">{errors.email?.message}</p>
          </div>

          <div className="senha-campo">
            <label htmlFor="senha">
              <i class="bi bi-lock"></i>Senha :
            </label>
            <span className="campo">
              <i class={showSenha} onClick={handleToggleSenha}></i>
              <input
                type={showInputType}
                {...register("senha")}
                name="senha"
                placeholder="*****"
              />
            </span>
          </div>
          <p className="error-txt">{errors.senha?.message}</p>

          <button type="submit">Cadastrar</button>
          <div className="opcoes">
            <ul>
              <li onClick={() => setModalShow(true)}>Termos de Uso</li>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};
export default cadastrar;
