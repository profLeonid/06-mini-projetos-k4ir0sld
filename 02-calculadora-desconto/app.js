'use strict'

//MINHA PRIMEIRA TENTATIVA ANTES DO PROFESSOR CORRIGIR
//A SAIDA E LOGICA DERAM CERTO, MAS AGORA VAMOS UTILIZAR FUNAÇÃO PURA

// function calcularDesconto(){
//     const precoOriginal = parseFloat(document.getElementById('precoOriginal').value)
//     const desconto      = parseFloat(document.getElementById('desconto').value)
//     const resultadoEconomizado     = document.getElementById('resultadoEconomizado')
//     const resultadoFinal           = document.getElementById('resultadoFinal')

//     const valorEconomizado = precoOriginal * (desconto / 100)
//     const precoFinal = precoOriginal - valorEconomizado

//     resultadoEconomizado.innerText = valorEconomizado.toFixed(2)
//     resultadoFinal.innerText       = precoFinal.toFixed(2)

//     trocaCorDesconto(desconto, resultadoFinal)

// }

// function trocaCorDesconto(desconto) {
//     const divResultado = document.querySelector('.resultado')

//     if (desconto <= 5) {
//         divResultado.classList.add('resultado-verde')
//     } else {
//         divResultado.classList.remove('resultado-verde') 
//     }
// }

/*
Função Pura (Responsabilidade Unica)
    Ela usa parametros e entrega um return, iiso para que ela seja mais versátil e utilizada
    em outros projetos, afinal essa função é pura exerce apenas uma coisa

function calcularValorEconomizado(preco, desconto) {
    return preco * desconto / 100
}

function calcularPrecoFinal (preco, valorEconomizado) {
    return preco - valorEconomizado
}
*/

//Função em seta - Arrow

const calcularValorEconomizado = (preco, desconto) => preco * desconto / 100

const calcularPrecoFinal = (preco, valorEconomizado) => preco - valorEconomizado

function escolherCor (desconto) {
    if(desconto <= 5){
        return 'desconto1'
    }else if (desconto <= 10) {
        return 'desconto2'
    }else{
        return 'desconto3'
    }
}

function handleClick () {
    const preco = Number(document.getElementById('precoOriginal').value)
    const desconto = Number(document.getElementById('desconto').value)
    const resultado = document.getElementById('resultado')

    const valorEconomizado  = calcularValorEconomizado(preco, desconto)
    const precoFinal        = calcularPrecoFinal(preco, valorEconomizado)

    const cor = escolherCor(desconto)

    resultado.textContent = `${valorEconomizado} - ${precoFinal}`
    resultado.classList.remove('desconto1', 'desconto2', 'desconto3')
    resultado.classList.add(cor)

}
