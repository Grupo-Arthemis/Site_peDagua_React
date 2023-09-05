import React from 'react';
import '../Padrao/padrao.css';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer__textos">
        <ul className="footer__textos__logo">
          <li>
            <h1>pé d’água</h1>
          </li>
          <li>
            <h2>Um sistema de alerta e monitoramento de enchentes</h2>
          </li>
          <li>
            <div className="footer__textos__logo__redes">
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </li>
        </ul>
        <ul className="footer__textos__emergencia">
          <li>
            <h3>Emergência</h3>
          </li>
          <li>
            <a href="#">polícia - 190</a>
          </li>
          <li>
            <a href="#">Bombeiros - 193</a>
          </li>
          <li>
            <a href="#">SAMU - 192</a>
          </li>
          <li>
            <a href="#">Disque Denuncia - 181</a>
          </li>
          <li>
            <a href="#">Defesa Civial - 199</a>
          </li>
        </ul>
        <ul className="footer__textos__sobre">
          <li>
            <h3>Sobre</h3>
          </li>
          <li>
            <a href="#">Sobre o projeto</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Perguntas frequentes</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
        </ul>
        <ul className="footer__textos__parceiros">
          <li>
            <h3>IBM</h3>
          </li>
          <li>
            <a href="#">Heinz</a>
          </li>
          <li>
            <a href="#">Food for All</a>
          </li>
          <li>
            <a href="#">Clima Tempo</a>
          </li>
          <li>
            <a href="#">Vinheria Rochedo</a>
          </li>
        </ul>
      </div>
      <div className="footer__divisoria"></div>
      <div className="footer__bottom">
        <h3>
          Copyright © 2023 Pé d´água | All Rights Reserved | Terms and
          Conditions | Privacy Policy
        </h3>
      </div>
    </footer>
  );
}

export default Footer;