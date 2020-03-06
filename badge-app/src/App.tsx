import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import './App.css';
import Account from './components/pages/Account';
import Leaderboard from './components/pages/Leaderboard';
import BadgeManager from './components/pages/BadgeManager';
import Footer from './components/layout/footer';
import Badges from './components/pages/Badges';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-container">
            <Header />
            <div className="App-body">
              <Route exact path="/" component={Badges} />
              <Route path="/badges" component={Badges} />
              <Route path="/account" component={Account} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/badgemanager" component={BadgeManager} />
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;