import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Detail(props) {
  const images = require.context('../images/', true);
  let imgDetail = images('./' + props.data.image);

  const tags = props.data.tags.map((tagItem) => {
    return <li className="section__detail--tag">{tagItem}</li>;
  });
  return (
    <section className="section__detail">
      <Link className="link" to={`/`}>
        <div class="outer">
          <div class="inner">
            <label>Volver</label>
          </div>
        </div>
      </Link>

      <div className="section__img">
        <img src={imgDetail} title={props.data.name} alt={props.data.name} />
      </div>
      <div className="section__detail--container">
        <h1 className="section__detail--title">{props.data.name}</h1>
        <p className="section__detail--text">{props.data.description}</p>
        <ul className="tag__container">{tags}</ul>
        <div className="icon__container">
          <a className="text--detail" href={props.data.code} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-code icon--detail"></i> Código
          </a>
          <a className="text--detail" href={props.data.web} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-laptop icon--detail"></i> Web
          </a>
        </div>
      </div>
    </section>
  );
}

export default Detail;
