import React, { Component } from 'react';
import CounterListView from '../../views/CounterListView/CounterListView';

class CounterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [0]
    }
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.addCounter = this.addCounter.bind(this);
    this.minusCounter = this.minusCounter.bind(this);
  }
  addOne(index) {
    const counters = this.state.counters.slice();
    counters[index]++;
    this.setState({ counters });
  }
  minusOne(index) {
    const counters = this.state.counters.slice();
    counters[index]--;
    this.setState({ counters });
  }
  addCounter() {
    const counters = this.state.counters.slice();
    counters.push(0);
    this.setState({ counters });
  }
  minusCounter() {
    const counters = this.state.counters.slice();
    counters.pop();
    this.setState({ counters });
  }
  render() {
    return (
      <CounterListView 
        counters={this.state.counters}
        addOne={this.addOne}
        minusOne={this.minusOne}
        addCounter={this.addCounter}
        minusCounter={this.minusCounter}
      />
    )
  }
}

export default CounterList;