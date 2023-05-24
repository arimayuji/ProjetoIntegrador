import logo from "../images/logo-maua.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navabar.css";

const NavBar = () => {
  return (
    <>
      <Navbar className="nav" expand="lg">
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
            <Link to="/Calculadora" className="link">
              Calculadora
            </Link>

            <Link to="/Notas" className="link">
              Notas
            </Link>
            <NavDropdown title="Cursos" id="navDropDown">
              <NavDropdown.Item id="navDrop-item" href="/Ciência_da_Computação">
                Ciência da Computação
              </NavDropdown.Item>
              <NavDropdown.Item id="navDrop-item" href="/Design">
                Design
              </NavDropdown.Item>
              <NavDropdown.Item id="navDrop-item" href="/Sistemas_da_Informação">
                Sistema da Informação
              </NavDropdown.Item>
              <NavDropdown.Item id="navDrop-item" href="/Administração">
                Administração
              </NavDropdown.Item>
            </NavDropdown>
            <Link to="/Login" className="link">
              Login
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
