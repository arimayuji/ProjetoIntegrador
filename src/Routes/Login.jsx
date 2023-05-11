import { useForm } from "react-hook-form";
import { GlobalStyle } from "../GlobalStyle";
import Logo from "../images/logo-toSalvoBlue.png";
import { schemaLogin } from "../Schema/schemas";
import "./Login.css";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

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
    resolver: yupResolver(schemaLogin),
  });

  const firebaseapp = initializeApp({
    apiKey: "AIzaSyBt-jfOZdmMNuDQryRXOjTd3ZW0cXseURE",
    authDomain: "testando-firebase-b99d0.firebaseapp.com",
    projectId: "testando-firebase-b99d0",
  });
  
  const [users, setUsers] = useState([]);

  const db = getFirestore(firebaseapp);
  const useCollectionRef = collection(db, "usuarios");

  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(useCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
    }
    getUsers();

  }, [])


  const form_result = (data) => {
    console.log(data);
  };
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
        <form onSubmit={handleSubmit(form_result)} className="login-forms">
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

          <button type="submit">Entrar</button>
          <div className="opcoes">
            <ul>
              <li>
                <Link to="/RecuperarSenha" className="link">
                  Recuperar Senha
                </Link>
              </li>
              <li>
                <Link to="/Cadastrar" className="link">
                  Cadastrar-se!
                </Link>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
