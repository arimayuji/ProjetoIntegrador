
import { Link } from "react-router-dom";
import logo from "../images/toSalvo-Blue.png";
import { GlobalStyle } from "../GlobalStyle";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Homepage.css";


function Layout() {
 
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
                <Link  className="link">
                  Calculadora

                </Link>
                <Link to="/SobreNos" className="link">
                  Quem Somos
                </Link>
                <Link to="/Login" className="link">
                  <button>Login</button>
                </Link>

              </Nav>

            </Container>
          </Navbar>
        </div>
        <div className="main-content-home">
          <h1>Faça seus cálculos</h1>
          <h1>com Tô Salvo</h1>
          <section className="sub-title"><p>
            Acesse agora e simplifique seu acompanhamento de desempenho!  </p>
            <p> Calcule suas notas com precisão e facilidade no To Salvo. Nossa plataforma oferece uma ferramenta intuitiva para calcular sua média acadêmica.</p>
            <p>Simplifique sua vida estudantil com nossa plataforma completa!</p>
          </section>

          <button className="login-home"><Link to="/Office365">Calcule Agora!</Link></button>
        </div>
      </div>
    </>
  );
}

export default Layout;
