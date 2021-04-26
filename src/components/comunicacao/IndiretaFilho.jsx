import React from 'react'

export default (props) => {

    const sendInfo = props.info

    const min = 15
    const max = 90
    const age = parseInt(Math.random()* (max - min) + min);
    const nerd = Math.random() > 0.5;


    return (



        <div>
            <button onClick={(e)=>sendInfo("Danilo", age, nerd)}>Fornecer Informações</button>
        </div>


    )
}