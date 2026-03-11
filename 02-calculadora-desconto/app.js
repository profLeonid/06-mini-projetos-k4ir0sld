'use strict'

function calcularDesconto(){
    const precoOriginal = parseFloat(document.getElementById('precoOriginal').value)
    const desconto      = parseFloat(document.getElementById('desconto').value)
    const resultadoEconomizado     = document.getElementById('resultadoEconomizado')
    const resultadoFinal           = document.getElementById('resultadoFinal')

    const valorEconomizado = precoOriginal * (desconto / 100)
    const precoFinal = precoOriginal - valorEconomizado

    resultadoEconomizado.innerText = valorEconomizado.toFixed(2)
    resultadoFinal.innerText       = precoFinal.toFixed(2)

    trocaCorDesconto(desconto, resultadoFinal)

}

function trocaCorDesconto(desconto) {
    const divResultado = document.querySelector('.resultado') // ✅ pega a div

    if (desconto <= 5) {
        divResultado.classList.add('resultado-verde')
    } else {
        divResultado.classList.remove('resultado-verde') // limpa se não for verde
    }
}