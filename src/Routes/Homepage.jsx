import { Link } from "react-router-dom";
import logo from "../images/toSalvo-Blue.png";
import { GlobalStyle } from "../GlobalStyle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Homepage.css";
import { useState, useMemo } from "react";

function Layout() {
  const [isLogged, setIsLogged] = useState({
    notas: "/Notas",
    calculadora: "/Ciência_da_Computação",
  });

  const sair = () => {
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("email");
    localStorage.removeItem("curso");
    setIsLogged({
      notas: "/",
      calculadora: "/",
    });
  };

  const loggedIn = useMemo(() => {
    const isLoggedIn = localStorage.getItem("loginStatus");
    if (isLoggedIn) {
      setIsLogged({
        notas: "/Notas",
        calculadora: "/Ciência_da_Computação",
      });
      return (
        <>
          <div className="user">
            <i className="bi bi-person-circle"></i>
            <p>{localStorage.getItem("email")}</p>
          </div>
        </>
      );
    } else {
      return <button>Login</button>;
    }
  }, [localStorage.getItem("loginStatus")]);
  return (
    <>
      <GlobalStyle />
      <div className="root-main-home">
        <div className="header-home">
          <Navbar className="nav-home" expand="lg">
            <Container fluid>
              <Navbar.Brand href="#home" className="logo">
                <Link to="/" className="link">
                  <img src={logo} alt="" />
                </Link>
              </Navbar.Brand>
              <Nav
                className="justify-content-center align-items-center"
                id="nav-items"
              >
                <Link className="link" to={isLogged.notas}>
                  Notas
                </Link>
                <Link className="link" to={isLogged.calculadora}>
                  Calculadora
                </Link>
                <Link to="/SobreNos" className="link">
                  Quem Somos
                </Link>
                <Link to="/Login" className="link">
                  {loggedIn}
                </Link>
                <Link to="/" className="link">
                  <i class="bi bi-box-arrow-left" onClick={sair}></i>
                </Link>

              </Nav>
            </Container>
          </Navbar>
        </div>
        <div className="main-content-home">
          <h1>Faça seus cálculos</h1>
          <h1>com Tô Salvo</h1>
          <section className="sub-title">
            <p>Acesse agora e simplifique seu acompanhamento de desempenho!</p>
            <p>
              Calcule suas notas com precisão e facilidade no Tô Salvo. Nossa
              plataforma oferece uma ferramenta intuitiva para calcular sua
              média acadêmica.
            </p>
            <p>Simplifique sua vida estudantil com nossa plataforma completa!</p>
          </section>
          <button className="login-home">
            <Link to="/Office365">Calcule Agora!</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Layout;
