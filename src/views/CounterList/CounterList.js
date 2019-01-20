import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { addCounter, removeCounter } from '../../actions/actions';
import SingleCounter from '../SingleCounter/SingleCounter';

const buttonsDivStyle = {
  display: 'flex',
  justifyContent: 'center'
};
const buttonStyle = {
  margin: '2% 2% 5% 2%'
};

const CounterList = ({ counters, addCounter, removeCounter }) => (
  <div>
    {counters.map((count, index) => (
      <SingleCounter
        key={index}
        index={index}
        counterNumber={index + 1}
        count={count}
      />
    ))}
    <div style={buttonsDivStyle}>
      <Button onClick={addCounter} style={buttonStyle}>
        Add Counter
      </Button>
      <Button onClick={removeCounter} style={buttonStyle}>
        Remove Counter
      </Button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  counters: state
});

const mapDispatchToProps = (dispatch, props) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: () => dispatch(removeCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterList);
