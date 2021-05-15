import React, { useState } from 'react'
import './input.css'


export default (props)=>{

    const [valor, setValor] = useState(" Olá!  ")

    return(

        <div className='input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={(e) => setValor(e.target.value)}
            placeHolder="Experimente escrever algo!" />

        </div>
    )
}