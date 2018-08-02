import React, { Component } from 'react';
// import Client from './components/client';

import Router from './components/router';

import createBrowserHistory from 'history/createBrowserHistory'
const customHistory = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={customHistory} />
      </div>
    );
  }
}

export default App;
