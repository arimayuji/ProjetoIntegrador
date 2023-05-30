import logo from "../images/toSalvo-Branco.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navabar.css";

const sair = () => {
  localStorage.removeItem("loginStatus");
  localStorage.removeItem("email");
  localStorage.removeItem("curso");
}
const NavBar = () => {
  return (
    <>
      <Navbar className="nav " expand="lg">
        <Container fluid className="header">
          <Link to="/" >
            <img src={logo} alt="" />
          </Link>
          <Nav
            className="justify-content-center align-items-center"
            id="nav-items"
          >
            <Link to="/Notas" className="link">
              Notas
            </Link>
            {/* <NavDropdown title="Cursos" id="navDropDown">
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
            </NavDropdown> */}
            <Link to="/" className="link" onClick={function () {
              sair();
            }}>
              Sair
            </Link>
            <div className="user">
              <i class="bi bi-person-circle"></i>
              <p>{localStorage.getItem("email")}</p>
            </div>
          </Nav>
        </Container>
      </Navbar >
    </>
  );
};
export default NavBar;
