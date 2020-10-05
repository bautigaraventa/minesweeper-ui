import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Configuration from './components/Configuration';
import Game from './components/Game';
import Games from './components/Games';
import Home from './components/Home';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>MineSweeper</h1>
      <UserContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/games/:player" component={Games} />
            <Route path="/configuration" component={Configuration} />
            <Route path="/game/:id" component={Game} />
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
