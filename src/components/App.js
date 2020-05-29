import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import img from '../images/profile-photo.png';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__logo">Marta Montoro</h1>
        <nav className="header__menu">
          <a href="#page1" data-text="conoceme">
            conóceme{' '}
          </a>
          <span>- </span>
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
      <main className="container">
        <section id="page1" className="page section__about">
          <div className="section__about--container">
            <div className="frame__pink">
              {' '}
              <img src={img} title="Marta" alt="Get to know me" />
            </div>
            <div className="frame__paper"></div>
            <div className="frame__white"></div>
            <div className="frame__bck"></div>
          </div>
          <div className="section__about--box">
            <h3 className="page section__about--title">¡Hola!</h3>
            <h4 className="page section__about--subtitle">
              Me llamo <span className="text-underline">Marta</span> y soy <span className="text-underline-two">Desarrolladora Front-end</span>
            </h4>

            <p className="page section__about--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>
        {/* <section id="page2" className="page section__projects">
          fefef
        </section>
        <section id="page3" className="page section__knowledge">
          feffff
        </section>
        <section id="page4" className="page section__contact">
          wwww
        </section> */}
      </main>
    </div>
  );
}

export default App;
