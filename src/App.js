import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { getData } from './utils/fetch';
import NavBar from './components/NavBar/NavBar';
import Homepage from './containers/Homepage/Homepage';
import './App.scss';

const App = () => {
  useEffect(() => {
    getData('competitions/')
      .then(res => res.json())
      .then(res => console.log(res));
  });
  return (
    <div className="App">
      <NavBar />
      <Homepage />
    </div>
  );
};

export default App;
