const lista = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


 const somadetodososnumeros = lista.reduce ((previous, curremt) => {
    console.log (previous, curremt)
    return previous + curremt
})


console.log (somadetodososnumeros)