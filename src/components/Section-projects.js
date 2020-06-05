import React from 'react';

import '../stylesheets/index.scss';

import Item from './Item';
function Projects(props) {
  const items = props.data.map((item) => {
    return <Item image={item.image} name={item.name} web={item.web} code={item.code} id={item.id} description={item.description} subtitle={item.subtitle} tags={item.tags} key={item.id} />;
  });

  return (
    <section id="page2" className="page section__projects">
      {items}
    </section>
  );
}

export default Projects;
