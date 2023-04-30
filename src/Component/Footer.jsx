import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Nav
            className="justify-content-center align-items-center"
            id="nav-items"
          >
            <Link to="/"className="link">Tô Salvo</Link>

            <Link to="/Contato"className="link">Contato</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
