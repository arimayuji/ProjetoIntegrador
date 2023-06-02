import logo from "../images/toSalvo-Blue.png";
import office from "../images/office365.png";
import "./Office.css";
import { Link } from "react-router-dom";
function Office() {
  return (
    <>
    
      <div className="office-login">
        <Link to="/" className="link">
          <i className="bi bi-arrow-left"></i>
        </Link>
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

export default Office;