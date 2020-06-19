import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Homepage from './containers/Homepage/Homepage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
    </div>
  );
};

export default App;
