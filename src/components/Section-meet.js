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

        <p className="page section__about--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </section>
  );
}

export default Meet;
