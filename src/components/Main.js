import React from 'react';
import Meet from './Section-meet';
import Projects from './Section-projects';
import Knowledge from './Section-knowledge';
import Contact from './Section-contact';

function Main(props) {
  return (
    <main className="container">
      <Meet />
      <Projects data={props.data} />
      <Knowledge />
      <Contact />
    </main>
  );
}

export default Main;
