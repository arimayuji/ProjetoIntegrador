import logo from "../images/logo-mauaBlue.png";
import office from "../images/office365.png";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="office-login">
        <img src={logo} alt="" />
        <div className="office">
          <span>Autenticar usando sua conta em:</span>
          <span className="office-img">
            <Link to="/Login" className="link">
              <img src={office} alt="" />
            </Link>
          </span>
          
        </div>
      </div>
    </>
  );
}

export default Login;