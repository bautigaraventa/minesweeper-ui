import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Configuration from './components/Configuration';
import Game from './components/Game';
import Games from './components/Games';
import Home from './components/Home';
import UserContextProvider from './context/UserContext';

const divStyle = {
  padding: '5rem 20rem',
  height: '100%',
}

const h1Style = {
  fontSize: '6rem',
  fontWeight: '300',
  textAlign: 'center',
  paddingBottom: '5rem',
}

function App() {
  return (
    <div style={divStyle}>
      <h1 style={h1Style}>MineSweeper</h1>
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
