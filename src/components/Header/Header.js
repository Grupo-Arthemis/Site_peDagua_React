import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import MenuHamburguer from "../../assets/menu-hamburguer.png";
import { Link } from 'react-router-dom';
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
            <li><Link to="/" className='ativo'>Home</Link></li>
            <li><Link to='/consulta'>Consulta</Link></li>
            <li><Link to='/galeria'>Galeria</Link></li>
            <li id='menuSobre'>
              <a onClick={handleSobreClick} style={{cursor: "pointer"}}>Sobre <i className={`fas fa-angle-down ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}></i></a>
              <ul className={`header__menu__lista__sobre ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}>
                <li><Link to='/projeto'>&nbsp; <i className='fas fa-angle-right'></i> Projeto</Link></li>
                <li><Link to='/grupo'>&nbsp; <i className='fas fa-angle-right'></i> Grupo</Link></li>
                <li><Link to='/perguntas'>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</Link></li>
                <li><Link to='/contatos'>&nbsp; <i className='fas fa-angle-right'></i> Contatos</Link></li> 
              </ul>
            </li>
          </ul>
        </nav>
        <div className='header__login'>
          <button className='header__login__login'><Link to='/login'>Login</Link> </button>
          <button className='header__login__cadastro'><Link to='/cadastro'>Cadastro</Link> </button>
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
              <li><Link to="/" className='ativo'>Home</Link></li>
              <li><Link to='/consulta'>Consulta</Link></li>
              <li><Link to='/galeria'>Galeria</Link></li>
              <li id='menuSobre'>
                <a onClick={handleSobreClick} style={{cursor: "pointer"}}>Sobre <i className={`fas fa-angle-down ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}></i></a>
                <ul className={`header__menu__lista__sobre ${isSobreExpanded ? 'header__menu__lista__sobre__expandir' : ''}`}>
                  <li><Link to='/projeto'>&nbsp; <i className='fas fa-angle-right'></i> Projeto</Link></li>
                  <li><Link to='/grupo'>&nbsp; <i className='fas fa-angle-right'></i> Grupo</Link></li>
                  <li><Link to='/perguntas'>&nbsp; <i className='fas fa-angle-right'></i> Perguntas</Link></li>
                  <li><Link to='/contatos'>&nbsp; <i className='fas fa-angle-right'></i> Contatos</Link></li> 
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <div className='header__logo'>
          <h1 className='header__logo__texto'>pé d’água</h1>
        </div>
        <div className='header__login'>
          <Link to='/login'><img src={UserIcon} alt='' /></Link>
        </div>
      </header>
    </>
  );
} 

export default Header; 