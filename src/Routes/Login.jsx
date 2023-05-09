import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-mauaBlue.png";
import { schemaLogin } from "../Schema/schemas";
import "./Login.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {

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
        resolver: yupResolver(schemaLogin)
    });

    const form_result = (data) => {
        console.log(data);
    };
    return (
        <>
            <GlobalStyle />
            <div className="login">
                <img src={Logo} alt="" />
                <form onSubmit={handleSubmit(form_result)} className="login-forms">
                    <div className="email-campo">
                        <label htmlFor="email">Email :</label>
                        <input
                            type="email"
                            {...register("email")}
                            name="email"
                            placeholder="exemplo@maua.br"
                        />

                        <p className="error-txt">{errors.email?.message}</p>
                    </div>

                    <div className="senha-campo">
                        <label htmlFor="senha">Senha :</label>
                        <input
                            type="password"
                            {...register("senha")}
                            name="senha"
                            placeholder="*****"
                        />
                    </div>

                    <p className="error-txt">{errors.senha?.message}</p>


                    <button
                        type="submit"
                    >
                        Entrar
                    </button>
                    <div className="opcoes">
                        <ul>
                            <li>Recuperar Senha</li>
                            <li><Link to="/Cadastrar" className="link">
                            </Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;