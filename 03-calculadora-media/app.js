'use strict'

const calcularMedia = (n1, n2, n3) => Number(n1 + n2 + n3) / 3

function statusAluno (media) {
    if(media >= 7){
        return 'Aprovado'
    }else if(media > 5){
        return 'Recuperação'
    }else{
        return 'Reprovado'
    }
}

function escolherCor (statusAluno){
    if(statusAluno === 'Aprovado'){
        return 'status1'
    }else if(statusAluno === 'Recuperação'){
        return 'status2'
    }else{
        return 'status3'
    }
}

function handleClick(){
    const n1 = Number(document.getElementById('nota1').value)
    const n2 = Number(document.getElementById('nota2').value)
    const n3 = Number(document.getElementById('nota3').value)
    const resultado = document.getElementById('resultado')

    const media = calcularMedia(n1, n2, n3)
    const status = statusAluno(media)

    const cor = escolherCor(status)

    resultado.textContent = `${status}`
    resultado.classList.remove('status1', 'status2', 'status3')
    resultado.classList.add(cor)
}

