'use strict'

function calcularDesconto(){
    const precoOriginal = document.getElementById('precoOriginal')
    const desconto      = document.getElementById('desconto')
    const resultadoEconomizado     = document.getElementById('resultadoEconomizado')
    const resultadoFinal           = document.getElementById('resultadoFinal')

    resultadoEconomizado = precoOriginal * (desconto / 100)
    resultadoFinal = precoOriginal - resultadoEconomizado
}