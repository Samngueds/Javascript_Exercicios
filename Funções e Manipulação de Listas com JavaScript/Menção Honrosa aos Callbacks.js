
function adicao (x, y){
    x + y
}

function multiplicaçao (x, y) {
    x * y
}

function divisao (x, y) {
    return x / y
}

function subtracao (x, y) {
    return x - y
}


function calculadora ( x, operaçao, y) {
     console.log(operaçao(x,y))
}


calculadora(10, divisao, 20)


document.getElementById('btn1').addEventListener('click', () => {
    console.log('clicou')
})