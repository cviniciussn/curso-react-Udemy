import React from 'react'
import './App.css'


import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/Membros'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Produtos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParouImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPAi from './components/comunicacao/DiretaPai'


export default _ =>

    <div className='App'>
        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card titulo='#10 - Comunicação Direta' tt='#665066'>
                <DiretaPAi/>
            </Card>

            <Card titulo='#09 - Renderização Condicional' tt='#660066'>
                <UsuarioInfo usuario={{nome: "Carlos Alberto"}}/>
            </Card>

            <Card titulo='#08 - Renderização Condicional' tt='#cc6600'>
                <ParOuImpar numero={20} />
            </Card>

            <Card titulo='#07 - Tabela de Produtos' tt='#33cc33'>
                <Produtos />
            </Card>

            <Card titulo='#06 - Repeticao' tt='#cc0099'>
                <ListaAlunos />

            </Card>

            <Card titulo='#05 -  Componentes com Filhos' tt='#990000'   >
                <Familia sobrenome='Nascimento' >

                    <FamiliaMembro nome='Pedro' />
                    <FamiliaMembro nome='Ana' />
                    <FamiliaMembro nome='Marisa' />

                </Familia>
            </Card>


            <Card titulo='#04 -  Aleatório' tt='#009900'>
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo='#03 -  Fragmento' tt='#008'>
                <Fragmento />
            </Card>


            <Card titulo='#02 -  Situação do Aluno' tt="#cc0099">

                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={6.3}

                />
            </Card>

            <Card titulo='#01 -  Primeiro Componente' tt='#663300'>
                <Primeiro />

            </Card>


        </div>

    </div>
