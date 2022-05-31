const visor = document.querySelector('#visor')
const btnLimpar = document.querySelector('#btnLimpar')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btn0 = document.querySelector('#btn0')
const btnPonto = document.querySelector('#btnPonto')

const btnSomar = document.querySelector('#btnSomar')
const btnSubtrair = document.querySelector('#btnSubtrair')
const btnMultiplicar = document.querySelector('#btnMultiplicar')
const btnDividir = document.querySelector('#btnDividir')
const btnIgual = document.querySelector('#btnIgual')

let valorVisor = ''
let valor1
let operacao = ''
let repeticaoIgual = false
let repeticaoPonto = false

// _________________________ NUM _________________________ //

btn1.addEventListener('click', () => {
    visor.value = concatenar_numero('1')
})
btn2.addEventListener('click', () => {
    visor.value = concatenar_numero('2')
})
btn3.addEventListener('click', () => {
    visor.value = concatenar_numero('3')
})
btn4.addEventListener('click', () => {
    visor.value = concatenar_numero('4')
})
btn5.addEventListener('click', () => {
    visor.value = concatenar_numero('5')
})
btn6.addEventListener('click', () => {
    visor.value = concatenar_numero('6')
})
btn7.addEventListener('click', () => {
    visor.value = concatenar_numero('7')
})
btn8.addEventListener('click', () => {
    visor.value = concatenar_numero('8')
})
btn9.addEventListener('click', () => {
    visor.value = concatenar_numero('9')
})
btn0.addEventListener('click', () => {
    visor.value = concatenar_numero('0')
})
btnPonto.addEventListener('click', () => {
    if(!repeticaoPonto){
    visor.value = concatenar_numero('.')
    repeticaoPonto = true
    }
})


// _________________________ BTNs _________________________ //
btnLimpar.addEventListener('click', () => {
    visor.value = 0
    valorVisor = ''
    repeticaoIgual = false
    repeticaoPonto = false
})

btnSomar.addEventListener('click', () => {
    btnOperacao(Number(visor.value), 'btnSomar')

})

btnSubtrair.addEventListener('click', () => {
    btnOperacao(Number(visor.value), 'btnSubtrair')
})

btnMultiplicar.addEventListener('click', () => {
    btnOperacao(Number(visor.value), 'btnMultiplicar')
})

btnDividir.addEventListener('click', () => {
    btnOperacao(Number(visor.value), 'btnDividir')
})

btnIgual.addEventListener('click', () => {
    btnReusltado(operacao)
    repeticaoPonto = false


})

// _________________________ FUNCTIONS _________________________ //
function concatenar_numero(numero) {
    valorVisor += numero
    return valorVisor
}

function btnOperacao(numero, sinal) {
    valor1 = numero
    visor.value = 0
    valorVisor = ''
    operacao = sinal
    repeticaoIgual = false
    repeticaoPonto = false
}

function btnReusltado(operacao) {
    let valor2 = Number(visor.value)
    if (!repeticaoIgual) {
        switch (operacao) {
            case 'btnSomar':
                visor.value = valor1 + valor2
                valorVisor = ''
                break
            case 'btnSubtrair':
                visor.value = valor1 - valor2
                valorVisor = ''
                break
            case 'btnMultiplicar':
                visor.value = valor1 * valor2
                valorVisor = ''
                break
            case 'btnDividir':
                visor.value = valor1 / valor2
                valorVisor = ''
                break
        }

        valor1 = valor2
        repeticaoIgual = true

    } else {
        switch (operacao) {
            case 'btnSomar':
                visor.value = valor1 + valor2
                valorVisor = ''
                break
            case 'btnSubtrair':
                visor.value = valor1 - valor2
                valorVisor = ''
                break
            case 'btnMultiplicar':
                visor.value = valor1 * valor2
                valorVisor = ''
                break
            case 'btnDividir':
                visor.value = valor1 / valor2
                valorVisor = ''
                break
        } 
    }
}