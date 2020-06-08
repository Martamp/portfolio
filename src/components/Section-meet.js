import React from 'react';

import '../stylesheets/index.scss';
import img from '../images/profile-photo.png';
function Meet() {
  return (
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

        <p className="page section__about--text">Graduada en Diseño Integral y Gestión de la Imagen, amante del mundo del diseño y la tecnología. Tras trabajar como diseñadora gráfica de aplicaciones móviles y web en equipos multidisciplinares, descubrí que no solo quería diseñar plataformas, sino también crearlas con mis propias manos. </p>
      </div>
    </section>
  );
}

export default Meet;
