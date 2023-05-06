import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-mauaBlue.png";
import "./Login.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Login() {

    const schema = yup.object().shape({
        email: yup.string().email("Email Inválido").required("Preencher Campo").test('existe-numero', 'Senha deve possuir ao menos um número', (value) => {
            return /\d/.test(value);
        }),
        senha: yup.string().required("Preencher Campo").min(8, "Mínimo de 8 caracteres").max(20, "Máximo de 20 caracteres"),
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
            <GlobalStyle />
            <div className="login">
                <img src={Logo} alt="" />
                <span>Entrar</span>
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
                            <li>Cadastrar-se!</li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;