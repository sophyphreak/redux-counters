import React from 'react';
import { Button } from 'reactstrap';

const outerDivStyle = { 
  boderWidth: '5px',
  margin: '2% 20%',
  borderStyle: 'solid'
}

const counterTitleStyle = {
  textAlign: 'center',
  marginTop: '2%'
}

const innerDivStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const buttonStyle = {
  margin: '5%'
}

const h1Style = {
  margin: '5%'
}

const SingleCounterView = (props) => (
  <div style={outerDivStyle}>
  <h2 style={counterTitleStyle}>Counter #{props.counterNumber}</h2>
    <div style={innerDivStyle}>
      <Button onClick={props.minusOne} style={buttonStyle}>Minus One</Button>
      <h1 style={h1Style}>{props.count}</h1>
      <Button onClick={props.addOne} style={buttonStyle}>Add One</Button>
    </div>
  </div>
);

export default SingleCounterView;