import React from 'react';

// import { Container } from './styles';

function contador(props) {
  return (
    <div>
      <button onClick={props.setDec}>-</button>
      <button onClick={props.setClean}>!</button>
      <button onClick={props.setInc}>+</button>
      
    </div>
  )


}

export default contador;