import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-toSalvoBlue.png";
import { schemaLogin } from "../Schema/schemas";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ListaUsuarios } from "../db/BancoDeDados";


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // utilizado para capturar erroros de dados,
    formState: { isValid },
  } = useForm({
    // apenas verifica os campos quando ocorrer o Submit
    mode: "onSubmit",
    resolver: yupResolver(schemaLogin),
  });
  //variável usada para realizar a navegação entre páginas
  let navigate = useNavigate();

  //recebe a lista de usuários os dados do banco
  let users = ListaUsuarios();
  const accountVerification = (data) => {
    for (let i = 0; i < users.length; i++) {
      if (data.email === users[i].id && data.senha === users[i].senha) {
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("curso", users[i].curso)
        localStorage.setItem("email", users[i].id)
        verificarCurso(users[i].curso);
        return;
      }
    }
  }
  const verificarCurso = (curso) => {
    if (curso === "Ciência da Computação") return navigate("/Ciência_da_Computação")

    else if (curso === "Sistema da Informação") return navigate("/Sistema_da_Informação")

    else if (curso === "Design") return navigate("/Design")

    else if (curso === "Engenharia") return navigate("/Engenharia")

    else if (curso === "Administração") return navigate("/Administração")
  }
  // ação executada toda vez que a tela é carregada
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loginStatus");
    //   caso true , direciona diretamente para a tela do curso
    if (isLoggedIn) {
      const curso = localStorage.getItem("curso");
      verificarCurso(curso, navigate);
    }
  }, []);

  const [showSenha, setSenha] = useState("bi bi-eye-slash");
  const [showInputType, setInputType] = useState("password");

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
      <div className="login">
        <Link to="/" className="link">
          {" "}
          <i class="bi bi-arrow-left"></i>
        </Link>
        <img src={Logo} alt="" />
        <form onSubmit={handleSubmit(accountVerification)} className="login-forms">
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
              <input
                type={showInputType}
                {...register("senha")}
                name="senha"
                placeholder="*****"
              />
              <i class={showSenha} onClick={handleToggleSenha}></i>
            </span>
          </div>

          <p className="error-txt">{errors.senha?.message}</p>

          <button type="submit" >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
