import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default (props) => {

    const [nome, setNome] = useState('Adriano')
    const [idade, setIdade] = useState(10)
    const [nerd, setNerd] = useState(false)


    function getInfo(nomeP, idadeP, nerdP) {

        setNome(nomeP)
        setIdade(idadeP)
        setNerd(nerdP)

    }



    return (

        <div>
            <IndiretaFilho info={getInfo}/>

            <div>
                <p>Olá, o meu nome é {nome}!</p>
                <p>Eu tenho {idade} anos</p>
                <p>E {nerd ? " sou nerd" : " não sou nerd"}</p>

            </div>

        </div>
    )




}