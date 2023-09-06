import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import MenuHamburguer from "../../assets/menu-hamburguer.png";
import UserIcon from "../../assets/user-icon.svg";
import '../Padrao/padrao.css';
import './Header.css';

function Header() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSobreExpanded, setIsSobreExpanded] = useState(false);

  function handleMenuClick() {
    setIsMenuExpanded(!isMenuExpanded);
  }

  function handleSobreClick() {
    setIsSobreExpanded(!isSobreExpanded);
  }

  return (
    <>
      <header className="header-desktop">
        <div className='header__logo'>
          <img className='header__logo__imagem' src={Logo} alt='Logo com ondinhas' />
          <h1 className='header__logo__texto'>pé d’água</h1>
        </div>
        <nav className='header__menu'>
          <ul className='header__menu__lista'>
            <li><a href='/home' className='ativo'>Home</a></li>
            <li><a href='#'>Consulta</a></li>
            <li><a href='#'>Galeria</a></li>
            <li id='menuSobre'>
              <a href='#' onClick={handleSobreClick}>Sobre <i className={`fas fa-angle-down ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}></i></a>
              <ul className={`header__menu__lista__sobre ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}>
                <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Projeto</a></li>
                <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Grupo</a></li>
                <li><a href='/perguntas'>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</a></li>
                <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Contatos</a></li> 
              </ul>
            </li>
          </ul>
        </nav>
        <div className='header__login'>
          <button className='header__login__login'>Login</button>
          <button className='header__login__cadastro'>Cadastro</button>
        </div>
      </header>

      <header className="header-mobile">
        <div className='header__logo'>
          <img
            className='header__logo__imagem'
            src={MenuHamburguer}
            alt='Menu Hamburguer'
            onClick={handleMenuClick}
          />
          <nav className={`header__menu ${isMenuExpanded ? 'header__menu__expandir' : ''}`}>
            <ul className='header__menu__lista'>
              <li><a href='/home' className='ativo'>Home</a></li>
              <li><a href='#'>Consulta</a></li>
              <li><a href='#'>Galeria</a></li>
              <li id='menuSobre'>
                <a href='#' onClick={handleSobreClick}>Sobre <i className={`fas fa-angle-down ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}></i></a>
                <ul className={`header__menu__lista__sobre ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}>
                  <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Projeto</a></li>
                  <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Grupo</a></li>
                  <li><a href='/perguntas'>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</a></li>
                  <li><a href='#'>&nbsp; <i className='fas fa-angle-right'></i> Contatos</a></li> 
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__logo'>
          <h1 className='header__logo__texto'>pé d’água</h1>
        </div>
        <div className='header__login'>
          <img src={UserIcon} alt='' />
        </div>
      </header>
    </>
  );
} 

export default Header; 