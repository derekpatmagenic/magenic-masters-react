import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import './App.css';
import Account from './components/pages/Account';
import Badges from './components/pages/Badges';
import Leaderboard from './components/pages/Leaderboard';
import BadgeManager from './components/pages/BadgeManager';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Badges} />
            <Route path="/badges" component={Badges} />
            <Route path="/account" component={Account} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/badgemanager" component={BadgeManager} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;