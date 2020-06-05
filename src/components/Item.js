import React from 'react';
import { Link } from 'react-router-dom';
function Item(props) {
  const images = require.context('../images/', true);
  let img = images('./' + props.image);

  return (
    <Link key={props.id} to={`/page2/project/${props.id}`} className="section__projects--link">
      <div className="section__projects--container" id={props.id}>
        <div className="box--decoration">
          <img src={img} title={props.name} alt={props.name} />
        </div>
        <h4 className="section__projects--title">{props.name}</h4>
      </div>
    </Link>
  );
}

export default Item;
