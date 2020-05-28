import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <Route exact path="/" component={Landing} /> */}
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
