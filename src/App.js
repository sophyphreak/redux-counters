import React, { Component } from 'react';
import TitleBar from './views/TitleBar/TitleBar';
import CounterList from './containers/CounterList/CounterList';

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <CounterList />
      </div>
    );
  }
}

export default App;
