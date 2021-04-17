import React from 'react';

import If, { Else } from './if'


function condicional(props) {
    const usuario = props.usuario || {}
    return (
        // Se usuário e nome existirem torna a sentença verdadeira e renderiza seu filho
        <If test={usuario && usuario.nome}>

            <div>
                Seja Bem Vindo <strong>{usuario.nome}</strong>!
           </div>

            <Else>
                Seja bem vindo <strong>Amigão</strong>!
            </Else>

        </If>
    )
}

export default condicional;