import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Detail from './Detail';
import Header from './Header';
import Main from './Main';
import data from '../data.json';

function App() {
  function renderDetail(props) {
    const foundId = parseInt(props.match.params.id);

    const foundProject = data.projects.find((project) => parseInt(project.id) === foundId);
    if (foundProject) {
      return <Detail data={foundProject} />;
    }
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/page2/project/:id" render={renderDetail} />
        <Route path="/">
          <Header />
          <Main data={data.projects} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
