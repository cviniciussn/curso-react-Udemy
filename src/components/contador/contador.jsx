import React, { Component } from 'react'

class Contador extends React.Component {


    state = {
        numero: this.props.numeroInicial || 0,
        fixo: this.props.numeroInicial,
        passo: this.props.passoInicial || 5,
    }


    inc(){
        this.setState({

            numero: this.state.numero + this.state.passo

        })
    }

    clean(){
        this.setState({
            numero: this.state.fixo
        })
    }

    dec(){
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }



    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>Valor Atual: {this.state.numero}</h3>
                <button onClick={_ => this.inc()}>Incrementar</button>
                <button onClick={_ => this.clean()}>Limpar</button>
                <button onClick={_ => this.dec()}>Decrementar</button>
            </div>
        )
    }


}

export default Contador
