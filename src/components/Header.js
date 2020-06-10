import React from 'react';
import logo from '../images/logo-02.png';
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" width="80px" alt="Marta Montoro Logotipo"></img>
      <nav className="header__menu">
        <a href="#" data-text="conoceme" onClick={() => window.scrollTo(0, 0)}>
          conóceme{' '}
        </a>
        <span>/ </span>
        <a href="#page2" data-text="proyectos">
          proyectos{' '}
        </a>
        <span>/ </span>
        <a href="#page3" data-text="conocimientos">
          conocimientos{' '}
        </a>
        <span>/ </span>
        <a href="#page4" data-text="contacto">
          contacto{' '}
        </a>
      </nav>
      <nav className="header__menu--small">
        <a href="#" data-text="conoceme" onClick={() => window.scrollTo(0, 0)}>
          <i className="fas fa-user-astronaut get--icon"></i>
        </a>

        <a href="#page2">
          <i className="fas fa-desktop projects--icon"></i>
        </a>

        <a href="#page3">
          <i className="far fa-lightbulb know--icon"></i>
        </a>

        <a href="#page4">
          <i className="far fa-envelope contact--icon"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;
