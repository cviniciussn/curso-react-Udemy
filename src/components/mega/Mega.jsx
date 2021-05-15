import React, { useState } from 'react';

// import { Container } from './styles';

function Mega(props) {

    function GerarAleatorio(Array){

        var num = parseInt((Math.random() * 59 ) +1 )

        return Array.includes(num) ? GerarAleatorio(Array) : num
    }


    function GetArray(quantidade){

        // var Lista = Array(6).fill(0).reduce(
        //     (numeros) => {
        //         var num = GerarAleatorio(numeros)
        //         return [...numeros, num]
        //     }, []
        // )
        // return Lista

        var Lista1 = Array(quantidade).fill(0)
        
        for (let item in Lista1){
            var num = GerarAleatorio(Lista1)
            Lista1[item] = num
        }
        console.log(Lista1)
        return Lista1
    }

    const quantidade = props.qtde || 6
    const [numeros, setInicial] = useState(Array(quantidade).fill(0))
    var [qtde, setQuantidade] = useState(quantidade)


  return (
      <div>
          <h2>Mega</h2>
          <h3>{numeros.join(' ')}</h3>
          <button onClick={ _=> setInicial(GetArray(qtde))}> Gerar Numeros </button>
          <div>
          <label> Numeros a serem Gerados </label>
          <input id='qnt' type='number'
            value={qtde}
            onChange = {e => {setQuantidade(+e.target.value)}}
            />

          </div>
      </div>
  )
}

export default Mega;