import React from 'react';
import SingleCounter from '../SingleCounter/SingleCounter';
import { Button } from 'reactstrap';

const buttonsDivStyle = {
  display: 'flex',
  justifyContent: 'center'
}
const buttonStyle = {
  margin: '2% 2% 5% 2%'
}

const CounterListView = ({ counters, addOne, minusOne, addCounter, minusCounter }) => (
  <div>
    {counters.map((count, index) => (
      <SingleCounter 
        key={index} 
        counterNumber={index + 1} 
        count={count} 
        addOne={() => addOne(index)}
        minusOne={() => minusOne(index)}
      />
    ))}
    <div style={buttonsDivStyle}>
      <Button onClick={addCounter} style={buttonStyle}>Add Counter</Button>
      <Button onClick={minusCounter} style={buttonStyle}>Remove Counter</Button>
    </div>
  </div>
);


export default CounterListView;