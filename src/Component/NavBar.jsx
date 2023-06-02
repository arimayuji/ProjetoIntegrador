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
          <Nav className="justify-content-center align-items-center flex-grow-1" id="nav-items">
            <Link to={`/${localStorage.getItem("curso")}`} className="link">
              Calculadora
            </Link>
            <Link to="/Notas" className="link">
              Notas
            </Link>
            <Link
              to="/"
              className="link"
              onClick={function () {
                sair();
              }}
            >
              Sair
            </Link>
            <div className="user">
              <i className="bi bi-person-circle"></i>
              <p>{localStorage.getItem("email")}</p>
            </div>
          </Nav>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
