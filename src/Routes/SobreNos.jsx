import React from "react";
import { Link } from "react-router-dom";
import logoToSalvo from "../images/logo-toSalvoBlue.png";
import "./SobreNos.css";
import Leo from "../images/Leo.jpg";
import Yuji from "../images/Yuji.jpg";
import Luigi from "../images/Luigi.jpg";
import Oda from "../images/Oda.jpg";
import Cadu from "../images/Cadu.jpg";
import Rafael from "../images/Rafael.jpg";
import { GlobalStyle } from "../GlobalStyle";
const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <header>
        <div className="logo">
          <img src={logoToSalvo} alt="ToSalvo Logo" />
        </div>

      </header>
      <div className="bsz">
        <h1>Membros :</h1>
        <div className="team-members">
          <div className="member">
            <img src={Leo} alt="Membro 1" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Leonardo</h3>
            </div>
            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>

          </div>
          <div className="member">
            <img src={Yuji} alt="Membro 2" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Yuji</h3>
            </div>

            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
          <div className="member">
            <img src={Luigi} alt="Membro 3" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Luigi</h3>
            </div>

            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
        </div>
        <div className="team-members">
          <div className="member">
            <img src={Oda} alt="Membro 4" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Henrique</h3>
            </div>

            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
          <div className="member">
            <img src={Cadu} alt="Membro 5" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Cadu</h3>
            </div>

            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
          <div className="member">
            <img src={Rafael} alt="Membro 6" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Rafael</h3>
            </div>

            <div className="icons">
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-github"></i>
              <i class="bi bi-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;