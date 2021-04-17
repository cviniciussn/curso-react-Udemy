import React from 'react';

// import { Container } from './styles';

function comunicacao(props) {
  return (
      <div>
          <span>{props.nome } </span>
          <span><strong>{props.idade }</strong> </span>
          <span>{props.nerd ? "Nerd" : "CDF" }!</span>
      </div>
  );
}

export default comunicacao;