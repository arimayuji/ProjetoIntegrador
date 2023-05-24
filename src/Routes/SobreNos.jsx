import React from "react";
import logoToSalvo from "../images/logo-toSalvoBlue.png";
import "./SobreNos.css";
import Leo from "../images/Leo.jpg";
import Yuji from "../images/Yuji.jpeg";
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
              <a href="https://www.linkedin.com/in/leonardo-ribeiro-27509a271/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/TheRibeiro"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/ribeiro_le0/"><i className="bi bi-instagram"></i></a>
            </div>

          </div>
          <div className="member">
            <img src={Yuji} alt="Membro 2" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Yuji</h3>
            </div>

            <div className="icons">
              <a href="https://www.linkedin.com/in/yuji-arima-7b7059209/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/yujiarima17"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/_yarim_17/"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="member">
            <img src={Luigi} alt="Membro 3" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Luigi</h3>
            </div>

            <div className="icons">
              <a href="https://www.linkedin.com/in/luigi-ishii-055136236/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/luigishii"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/luigishii/"><i className="bi bi-instagram"></i></a>
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
              <a href="https://www.linkedin.com/in/henrique-yui-oda-279847212/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/henriqueoda"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/henriqueoda7/  "><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="member">
            <img src={Cadu} alt="Membro 5" />
            <div className="bio">
       
                <i class="bi bi-person-bounding-box"> </i>
                <h3>Cadu</h3>
                
             
            </div>

            <div className="icons">
              <a href="https://www.linkedin.com/in/cadu-dias-45b596238/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/Cadub"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/dias.cadu/"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="member">
            <img src={Rafael} alt="Membro 6" />
            <div className="bio">
              <i class="bi bi-person-bounding-box"> </i>
              <h3>Rafael</h3>
            </div>

            <div className="icons">
              <a href="https://www.linkedin.com/in/rafael-carrasco-66b7581a3/"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/RafCarrasco"><i className="bi bi-github"></i></a>
              <a href="https://www.instagram.com/orafaelcarrasco/"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;