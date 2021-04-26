import React, { useState } from 'react'
import './input.css'


export default (props)=>{

    const [valor, setValor] = useState("")
    
    function handle(e){
        setValor(e.target.value)
    }

    return(

        <div className='input'>
            <h2>{valor}</h2>
            <input value={valor} onChange={handle}/>

        </div>
    )
}