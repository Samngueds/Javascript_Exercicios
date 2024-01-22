function  funcao () {
    console.log(this)
}


const funcao2 = () => {
    console.log(this)
}


const januario = {
    nome: 'januario',
    funcao,
    funcao2
}

januario.funcao
januario.funcao2