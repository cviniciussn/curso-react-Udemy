import React from 'react';
import produtos from '../../data/produtos'
import '../repeticao/tabelaproduto.css'


function repeticao(props) {

    function getLinhas() {
        return produtos.map((produto, i) => {
            return (
                <tr className={i % 2 === 0 ? 'Par' : ''} key={produto.id} >
                    <td >{produto.id}</td>
                    <td >{produto.nome}</td>
                    <td >R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        }
        )
    }


    return (
        <div className='TabelaProdutos'>
            <table >
                <thead>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>

        </div>
    )
        ;
}

export default repeticao;