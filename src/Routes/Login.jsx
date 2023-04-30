import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import "./Login.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
function Login() {
  const [error, setError] = useState(false);
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
  });

  const form_result = (data) => {
    console.log(data);
  };
  return (
    <>
      <GlobalStyle />
      <form onSubmit={handleSubmit(form_result)} className="form-login">
        <div className="campo-nome">
          <label htmlFor="Nome">Nome :</label>
          <input
            type="text"
            {...register("nome", { required: true })}
            name="Nome"
          />
          {errors.nome &&
            setError(true)(<span className="error-span">Nome inválido</span>)}
        </div>

        <div className="campo-email">
          <label htmlFor="Email">Email :</label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="Email"
          />
          {errors.email &&
            setError(true)(<span className="error-span">Email inválido</span>)}
        </div>

        <div className="campo-senha">
          <label htmlFor="Senha">Senha :</label>
          <input
            type="password"
            {...register("senha", { required: true })}
            name="Senha"
          />
          {errors.senha &&
            setError(true)(<span className="error-span">Senha inválida</span>)}
        </div>
         
        <button
          type="submit"
          onClick={() => {
            // altera o valor do campo
            error
              ? reset()
              : reset({
                  nome: "",
                  email: "",
                  senha: "",
                });
          }}
        >
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
