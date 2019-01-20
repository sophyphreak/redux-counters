import React, { Component } from 'react';
import SingleCounterView from '../../views/SingleCounterView/SingleCounterView';

class SingleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  };

  addOne() {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  minusOne() {
    const count = this.state.count - 1;
    this.setState({ count });
  }

  render() {
    return (
      <SingleCounterView 
        counterNumber={1}
        count={this.state.count} 
        addOne={this.addOne}
        minusOne={this.minusOne}
      />
    );
  }
};

export default SingleCounter;