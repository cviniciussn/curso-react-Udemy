import React from 'react';

// import { Container } from './styles';

function basicos(props) {

    const { min, max } = props
    var al = parseInt(Math.random() * (max - min) + min)

    return (

        <div>

            <h1>Número Aleatório</h1>
            <strong>
                Valor Mínimo: {min}
            </strong>
            <strong>
                <p>
                    Valor Máximo: {max}

                </p>
            </strong>
            <strong>
                <p>

                    Valor Aleatório: {al}
                </p>
            </strong>

        </div>
    )
}

export default basicos;