import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
import logo from "../images/logo-maua.png"
import "./footer.css"
const Footer = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Nav
            className="justify-content-center align-items-center"
            id="nav-items"
          >
            <Link to="" className="link maua">
              <img src={logo} alt="" />
            </Link>

          </Nav>
          <Nav
            className="justify-content-center align-items-center"
            id="nav-items"
          >
            <Link to="/SobreNos" className="link">
              <button className="sbn1">Sobre nós</button>
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
