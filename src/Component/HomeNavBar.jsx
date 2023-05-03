import logo from "../images/logo-maua.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./HomeNavBar.css";
const NavBar = () => {
    return (
        <>
     
            <Navbar className="nav" expand="lg">
                <Container fluid>

                    <Nav
                        className="justify-content-center align-items-center"
                        id="nav-items"
                    >
                        <Navbar.Brand href="#home" className="logo">
                            <Link to="/" className="link">
                                <img src={logo} alt="" />
                            </Link>
                        </Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};
export default NavBar;
