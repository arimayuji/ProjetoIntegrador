import logo from "../images/toSalvo-Branco.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navabar.css";

const sair = () => {
  localStorage.removeItem("loginStatus");
  localStorage.removeItem("email");
  localStorage.removeItem("curso");
};

const NavBar = () => {
  return (
    <>
      <div className="header d-flex">
        <Navbar className="nav w-100" expand="sm">
          <Link to="/" className="logo-nav">
            <img src={logo} alt="" />
          </Link>
          <Nav
            className="justify-content-center align-items-center flex-grow-1 component"
            id="nav-items"
          >
            <Link
              to={`/${localStorage.getItem("curso")}`}
              className="link texto"
            >
              Calculadora
            </Link>
            <Link to="/Notas" className="link texto">
              Notas
            </Link>
            <div className="user">
              <i className="bi bi-person-circle"></i>
              <p>{localStorage.getItem("email")}</p>
            </div>
            <Link
              to="/"
              className="link"
              onClick={function () {
                sair();
              }}
            >
              <i class="bi bi-box-arrow-left" onClick={sair}></i>
            </Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
