import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Marta Montoro</h1>
      <nav className="header__menu">
        <a href="/" data-text="conoceme">
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
    </header>
  );
}

export default Header;
