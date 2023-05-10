import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-toSalvoblue.png";
import { schemaCadastro } from "../Schema/schemas";
import "./RecuperarSenha.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const RecuperarSenha = () => {
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

  return (
    <>
      <GlobalStyle />
      <div className="cadastro">
        <Link to="/Login" className="link">
          {" "}
          <i class="bi bi-arrow-left"></i>
        </Link>
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(form_result)} className="cadastro-forms">
          <div className="email-campo">
            <label htmlFor="email">
              <i class="bi bi-envelope"></i>Digite seu Email :
            </label>
            <input
              type="email"
              {...register("email")}
              name="email"
              placeholder="exemplo@maua.br"
            />

            <p className="error-txt">{errors.email?.message}</p>
          </div>

          <button type="submit">Recuperar</button>
          <div className="opcoes"></div>
        </form>
      </div>
    </>
  );
};
export default RecuperarSenha;
