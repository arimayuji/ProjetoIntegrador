import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import "./Login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
function Login() {

  const schema = yup.object().shape({
    nome: yup.string().required("Preencher Campo"),
    email: yup.string().required("Preencher Campo").matches(/^(\d{2}\.\d{5}-\d)@maua\.br$/, "Email Inválido"),
    senha: yup.string().required("Preencher Campo"),
  });
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
    resolver: yupResolver(schema)
  });

  const form_result = (data) => {
    console.log(data);
  };
  return (
    <>
      <GlobalStyle />
      <div className="main-content">
        <form onSubmit={handleSubmit(form_result)}>

          <label htmlFor="nome">Nome :</label>
          <div className="campo-dados">
            <i class="bi bi-person"></i>
            <input
              type="text"
              {...register("nome")}
              name="nome"
            />
          </div>

          <p className="error-txt">{errors.nome?.message}</p>



          <label htmlFor="email">Email :</label>
          <div className="campo-dados">
            <i class="bi bi-envelope"></i>
            <input
              type="text"
              {...register("email")}
              name="email"
            />
          </div>


          <p className="error-txt">{errors.email?.message}</p>



          <label htmlFor="senha">Senha :</label>
          <div className="campo-dados">
            <i className="bi bi-eye-fill"></i>
            <input
              type="password"
              {...register("senha")}
              name="senha"
            />
          </div>

          <p className="error-txt">{errors.senha?.message}</p>


          <button
            type="submit"
          >
            Login
          </button>
          <span className="admin-text">Acesso Administrador</span>
        </form>
      </div>
    </>
  );
}

export default Login;
