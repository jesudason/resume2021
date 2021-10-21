import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/history" exact component={History}/>
        <Route path="/projects" exact component={Projects}/>
      </Switch>
    </Router>
  );
}

export default App;
