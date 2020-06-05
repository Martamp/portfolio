import React from 'react';
import pdf from '../documents/marta-montoro-cv.pdf';
function Contact() {
  return (
    <section id="page4" className="section__contact">
      <form className="form" action="MAILTO:martamontoropastor@gmail.com" method="POST">
        <input type="text" name="nombre" id="nombre" placeholder="Nombre o empresa" className="input" required />
        <input type="email" name="email" placeholder="E-mail" className="email input" required />
        <div className="speech-bubble">
          <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="¿Qué necesitas?" className="textarea" required></textarea>
        </div>
        <div className="submit">
          <input className="submit" type="submit" value="Enviar" />
        </div>
      </form>
      <ul className="social">
        <li>
          <a className="ease-all" href="https://github.com/Martamp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt"></i>
          </a>
        </li>
        <li>
          <a className="ease-all" href="https://www.linkedin.com/in/martamontoropastor/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in icon"></i>
          </a>
        </li>
        <li>
          <a className="ease-all" href="tel:+34649694494" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-mobile-alt"></i>
          </a>
        </li>
        <li>
          <a className="ease-all download" href={pdf} download="Marta Montoro CV">
            CV
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
