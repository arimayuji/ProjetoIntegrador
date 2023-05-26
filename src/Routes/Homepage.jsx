import { useState } from "react";
import { Link } from "react-router-dom";
import logoToSalvo from "../images/logo-toSalvoBlue.png";
import "./Homepage.css";
import "./Office.css";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from "react";

function Layout() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 700); // Aguarde 500ms antes de remover a classe de carregamento

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
        <button>
          <Link to="/Login" className="link">
            Faça Login
          </Link>
        </button>

        <Carousel interval={3000} controls={false} indicators={false} className="custom-carousel" transition="fade">
          <Carousel.Item>
            <div className="carousel-conteudo">
              <p>Calcule suas notas universitárias de forma rápida!</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-conteudo">
              <p>Use a Calculadora Tô Salvo para se planejar!</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-conteudo">
              <p>Acompanhe seu desempenho acadêmico conosco!</p>
            </div>
          </Carousel.Item>
        </Carousel>

        <section className="texto-2">
          <p>
            Com o Tô Salvo, você terá o controle das suas notas e poderá planejar seu sucesso acadêmico de forma eficiente.
          </p>
          <p> Experimente agora mesmo e aproveite todos os recursos que nossa calculadora de notas universitárias tem a oferecer!</p>
        </section>
        {!showText && (
          <button onClick={handleButtonClick} className="leia-mais-button">
            Leia Mais
          </button>
        )}
        {showText && (
          <div className="texto-leia-mais">
            <p>Tô Salvo é uma ferramenta  para  universitários que desejam ter mais controle sobre suas notas.  </p>
            <p>Com nossa calculadora de notas, você poderá calcular suas médias, acompanhar seu desempenho  e planejar seu sucesso acadêmico. </p>
            <p>Além disso, oferecemos recursos adicionais, como adicionar notas de provas futuras e simular cenários para saber como afetarão sua média.</p>
            <p>Experimente o Tô Salvo e descubra como podemos ajudá-lo a alcançar seus objetivos acadêmicos!</p>
          </div >
        )
        }
      </div>

    </>
  );
}

export default Layout;
