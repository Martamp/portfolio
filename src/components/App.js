import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';

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
          honde
        </section>
        <section id="page2" className="page section__projects">
          fefef
        </section>
        <section id="page3" className="page section__knowledge">
          feffff
        </section>
        <section id="page4" className="page section__contact">
          wwww
        </section>
      </main>
    </div>
  );
}

export default App;
