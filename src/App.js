import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Homepage from './containers/Homepage/Homepage';
import Competitions from './containers/Competitions/Competitions';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/competitions" component={Competitions} />
        <Route path="/" exact component={Homepage} />
      </Switch>
    </div>
  );
};

export default App;
