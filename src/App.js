import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Competitions from './containers/Competitions/Competitions';
import Competition from './containers/Competitions/Competition/Competition';
import Team from './containers/Team/Team';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/competitions/:id" component={Competition} />
        <Route path="/competitions" component={Competitions} />
        <Route path="/teams/:id" component={Team} />
        <Redirect from="/" to="/competitions" />
      </Switch>
    </div>
  );
};

export default App;
