import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoToSalvo from "../images/logo-toSalvoBlue.png";
import "./Homepage.css";
import office from "../images/office365.png";
import "./Office.css";

function Layout() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 500); // Aguarde 500ms antes de remover a classe de carregamento

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`tela ${pageLoaded ? "show" : "loading"}`}>
        <img src={logoToSalvo} alt="" />
        
        <p> Bem-vindo ao Tô Salvo, o seu site de calculadora de notas universitárias!</p>
          <p >Experimente agora mesmo e comece a usar o Tô Salvo para seu sucesso acadêmico!</p>
        <div className="office">
          <Link to="/Login" className="link">
            <button>Faça Login</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Layout;
