
import React, { Component } from 'react';
import 'whatwg-fetch';
import './App.css';

import PatientScene from "./scenes/patient/PatientScene"
import HomeScene from "./scenes/home/HomeScene"


import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path="/patient/:patientID" component={PatientScene} />
                <Route path="/hydro" component={HomeScene} />
                <Route path="/" component={HomeScene} />
            </Switch>
        </Router>
    );
  }
}

export default App;
