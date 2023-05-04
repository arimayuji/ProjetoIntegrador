import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import "./Login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
function Login() {

    const schema = yup.object().shape({
        email: yup.string().email("Email Inválido").required("Preencher Campo"),
        senha: yup.string().required("Preencher Campo"),
    })

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
            <div className="login">
                <span>Entrar</span>
                <form onSubmit={handleSubmit(form_result)}>
                    <input
                        type="email"
                        {...register("email")}
                        name="email"
                        placeholder="Email"
                    />

                    <p className="error-txt">{errors.email?.message}</p>

                    <label htmlFor="senha">Senha :</label>
                    <input
                        type="password"
                        {...register("senha")}
                        name="senha"
                        placeholder="***"
                    />
                    <p className="error-txt">{errors.senha?.message}</p>


                    <button
                        type="submit"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;