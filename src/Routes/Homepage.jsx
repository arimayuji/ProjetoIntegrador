import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoToSalvo from "../images/logo-toSalvoBlue.png";
import "./Homepage.css";
import "./Office.css";
import Carousel from 'react-bootstrap/Carousel';


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
        <section className="texto-1">
          <p> Bem-vindo ao Tô Salvo, o seu site de calculadora de notas universitárias!</p>
          <p >Experimente agora mesmo e comece a usar o Tô Salvo para seu sucesso acadêmico!</p>
        </section>

        <Carousel interval={3000} controls={false} indicators={false}
          className="custom-carousel" transition="fade">
          <Carousel.Item>
            <div className="carousel-conteudo"><p>Calcule suas notas universitárias de forma rápida !</p></div>

          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-conteudo"><p>Use a Calculadora Tô Salvo para se planejar!</p></div>


          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-conteudo"><p>Acompanhe seu desempenho acadêmico conosco!</p></div>


          </Carousel.Item>
        </Carousel>
        
        <section className="texto-2">
          <p>
            Com o Tô Salvo, você terá o controle das suas notas e poderá planejar seu sucesso acadêmico de forma eficiente.

          </p>
          <p> Experimente agora mesmo e aproveite todos os recursos que nossa calculadora de notas universitárias tem a oferecer!</p>
        </section>

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
