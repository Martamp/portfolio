import React from 'react';
import logo from '../images/logo-02.png';
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" width="80px"></img>
      <nav className="header__menu">
        <a href="#page1" data-text="conoceme">
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
        <a href="/">
          <i class="fas fa-user-astronaut get--icon"></i>
        </a>
        <span> </span>
        <a href="#page2">
          <i class="fas fa-desktop projects--icon"></i>
        </a>
        <span> </span>
        <a href="#page3">
          <i class="far fa-lightbulb know--icon"></i>
        </a>
        <span> </span>
        <a href="#page4">
          <i class="far fa-envelope contact--icon"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;
