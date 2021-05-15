import React from 'react';

// import { Container } from './styles';

function Mega() {



    function GerarNumero(Array){

        var aleatorio = parseInt((Math.random() * 59 ) +1 )

        return Array.includes(aleatorio)? GerarNumero(Array) : aleatorio
        
    }

    function MontarArray(){

        var Lista1 = Array(6).fill(0)
        
        for (item in Lista1){
            var num = GerarNumero(Lista1)
            Lista1[item] = num
        }

        return Lista1
    }

  return <div />;
}

export default Mega;