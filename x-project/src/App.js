import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./components/home"
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Home/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
