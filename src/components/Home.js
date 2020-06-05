import React from 'react';

import Header from './Header';
import Main from './Main';
import data from '../data.json';
function Home() {
  return (
    <>
      <Header />
      <Main data={data.projects} />
    </>
  );
}

export default Home;
