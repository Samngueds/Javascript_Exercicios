const pessoa  = {
    genero: 'masculino'
}


const januario = {
   nome : 'januario',
   __proto__: pessoa
}

Object.create(pessoa)


console.log(januario.genero)