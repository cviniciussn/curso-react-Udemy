export default props => {
    // Filtra todos os filhos e procura por uma tag especificamente chamada Else
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    // Filtra todos os filhos e retorna todos MENOS o Else
    const ifChildren = props.children.filter(child => {
        return child !== elseChild
    })

    // Testa se props.test é verdadeiro retorna os filhos do componente IF sem os filhos de Else
    if (props.test) {
        return ifChildren

    // Testa se elseChild está setado e retorna somente o Else
    } else if (elseChild) {
        return elseChild
    } else {
        return false
    }

}

export const Else = props => props.children