import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Cases from './components/Cases';
import Home from './components/Home'
import Symptomps from './components/Symptomps'
import News from './components/News'
import Preventions from './components/Preventions'

import Contact from './components/Contact'

import { Route, Switch } from "react-router-dom"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cases" component={Cases} />
        <Route exact path="/symptomps" component={Symptomps} />
        <Route exact path="/prevention" component={Preventions} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
