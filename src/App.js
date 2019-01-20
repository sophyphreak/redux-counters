import React, { Component } from 'react';
import SingleCounter from './containers/SingleCounter.js/SingleCounter';
import TitleBar from './views/TitleBar/TitleBar';

class App extends Component {
  render() {
    return (
      <div>
      <TitleBar />
      <SingleCounter />
      </div>
    );
  }
}

export default App;
