import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import img from '../images/profile-photo.png';
import vision from '../images/vision.png';
import group from '../images/group.png';
import buscador from '../images/buscador.png';
import js from '../images/js.png';
import awesome from '../images/awesome.png';
import rickymorty from '../images/rickymorty.png';
import pdf from '../documents/marta-montoro-cv.pdf';
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
              <div className="frame__paper">
                <div className="frame__white">
                  <div className="frame__bck"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section__about--box">
            <h3 className="page section__about--title">¡Hola!</h3>
            <h4 className="page section__about--subtitle">
              Me llamo <span className="text-underline">Marta</span> y soy <span className="text-underline-two">Desarrolladora Front-end</span>
            </h4>

            <p className="page section__about--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </section>
        <section id="page2" className="page section__projects">
          <div className="section__projects--container">
            <div className="box--decoration">
              <img src={vision} title="VISION" alt="Galeria de arte virtual" />
            </div>
            <h4 className="section__projects--title">VISION</h4>
          </div>
          <div className="section__projects--container second">
            <div className="box--decoration">
              <img src={rickymorty} title="Rick & Morty" alt="Buscador de personajes" />
            </div>
            <h4 className="section__projects--title">Rick & Morty</h4>
          </div>
          <div className="section__projects--container third">
            <div className="box--decoration">
              <img src={awesome} title="Awesome Profile Cards" alt="Crea tu propia tarjeta de visita" />
            </div>
            <h4 className="section__projects--title">Crea tu tarjeta</h4>
          </div>
          <div className="section__projects--container four">
            <div className="box--decoration">
              <img src={js} title="Awesome Profile Cards" alt="Crea tu propia tarjeta de visita" />
            </div>
            <h4 className="section__projects--title">Awesome Profile Cards JS</h4>
          </div>
          <div className="section__projects--container five">
            <div className="box--decoration">
              <img src={buscador} title="Buscador Series" alt="Buscador de series" />
            </div>
            <h4 className="section__projects--title">Buscador de series</h4>
          </div>
          <div className="section__projects--container six">
            <div className="box--decoration">
              <img src={group} title="Web grupal" alt="Web grupal" />
            </div>
            <h4 className="section__projects--title">Web informativa</h4>
          </div>
        </section>
        <section id="page3" className="section__knowledge">
          <div className="section__knowledge--text">
            <h3 className="developer ">desarrollo</h3>
            <span className="space"> ○ </span>
            <h4 className="fill">HTML</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">CSS</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">SASS</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Javascript</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">React</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Git</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Gulp</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Scrum</h4>
            <span className="space"> ○ </span>
            <h3 className="designer">diseño</h3>
            <span className="space"> ○ </span>
            <h4 className="fill">Photoshop</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Illustrator</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">InDesign</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Adobe XD</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Invision</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Flash</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">3DsMax</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Unity</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Rhinoceros</h4>
            <span className="space"> ○ </span>
            <h4 className="fill">Autocad</h4>
            {/* <span className="space"> ○ </span> */}
            {/* <span className="space"> // </span> */}
            {/* <h4 className="fill">Sony Vegas Pro</h4>
            <span className="space"> // </span> */}
          </div>
        </section>
        <section id="page4" className="section__contact">
          <form className="form" action="MAILTO:martamontoropastor@gmail.com" method="POST">
            <input type="text" name="nombre" id="nombre" placeholder="Nombre o empresa" className="input" required />
            <input type="email" name="email" placeholder="E-mail" className="email" required className="input" />
            <div className="speech-bubble">
              <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="¿Qué necesitas?" className="textarea" required></textarea>
            </div>
            <div className="submit">
              <input className="submit" type="submit" value="Enviar" />
            </div>
          </form>
          <ul class="social">
            <li>
              <a class="ease-all" href="https://github.com/Martamp" target="_blank">
                <i class="fab fa-github-alt"></i>
              </a>
            </li>
            <li>
              <a class="ease-all" href="https://www.linkedin.com/in/martamontoropastor/" target="_blank">
                <i class="fab fa-linkedin-in icon"></i>
              </a>
            </li>
            <li>
              <a class="ease-all" href="tel:+34649694494" target="_blank">
                <i class="fas fa-mobile-alt"></i>
              </a>
            </li>
            <li>
              <a class="ease-all download" href={pdf} download="Marta Montoro CV">
                CV
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
