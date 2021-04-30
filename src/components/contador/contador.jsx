import React, { Component } from 'react'
import './contador.css'
import Display from './display'
import Botoes from './botoes'
import Form from './passoForm'

class Contador extends React.Component {


    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
        fixo: this.props.numeroInicial || 0,
    }


    inc = () => {
        this.setState({

            numero: this.state.numero + this.state.passo

        })
    }

    clean = () => {
        this.setState({
            numero: this.state.fixo,
            passo: this.state.fixo,
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }




    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Form passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec} setClean={this.clean}/>

            </div>
        )
    }


}

export default Contador




const obj = {
    idade: 10,
    nome: 'andré',
}
