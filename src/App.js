import React, { Component } from 'react';
import { Provider } from 'react-redux';
import TitleBar from './views/TitleBar/TitleBar';
import CounterList from './views/CounterList/CounterList';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TitleBar />
        <CounterList />
      </Provider>
    );
  }
}

export default App;
