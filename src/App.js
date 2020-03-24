import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import { Alert } from './components/layout/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/Pages/About';
import User from './components/users/User';
import NotFound from './components/Pages/NotFound';
import GithubState from '../src/context/github/GithubState';
import AlertState from '../src/context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
