import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-toSalvo.png";
import { schemaCadastro } from "../Schema/schemas";
import "./Cadastro.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

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
        resolver: yupResolver(schemaCadastro)
    });

    const form_result = (data) => {
        console.log(data);
    };
    const [showSenha, setSenha] = useState("bi bi-eye-slash");
    const [showInputType, setInputType] = useState("password");

    const handleToggleSenha = () => {
        setSenha(prevState =>
            prevState === "bi bi-eye-slash" ? "bi bi-eye" : "bi bi-eye-slash"
        );

        setInputType(prevState =>
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
                        <label htmlFor="email"><i class="bi bi-person"></i>Nome :</label>
                        <input
                            {...register("nome")}
                            name="nome"
                        />

                        <p className="error-txt">{errors.nome?.message}</p>
                    </div>
                    <div className="email-campo">
                        <label htmlFor="email"><i class="bi bi-envelope"></i>Email :</label>
                        <input
                            type="email"
                            {...register("email")}
                            name="email"
                            placeholder="exemplo@maua.br"
                        />

                        <p className="error-txt">{errors.email?.message}</p>
                    </div>

                    <div className="senha-campo">
                        <label htmlFor="senha"><i class="bi bi-lock"></i>Senha :</label>
                        <span className="campo"><i class={showSenha} onClick={handleToggleSenha}></i><input
                            type={showInputType}
                            {...register("senha")}
                            name="senha"
                            placeholder="*****"
                        /></span>

                    </div>
                    <p className="error-txt">{errors.senha?.message}</p>


                    <button
                        type="submit"
                    >
                        Cadastrar
                    </button>
                    <div className="opcoes">
                        <ul>
                            <li><Link to="/Termos de Uso" className="link">
                                Termos de Uso</Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </>
    )
}
export default cadastrar;