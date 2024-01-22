const lista = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

/*lista.forEach((vaule, i, listeRef) => {
    console.log (vaule, i, listeRef)
})*/

const cb = (vaule, i, listeRef) => {
    console.log (vaule, i, listeRef)
}

lista.forEach(cb)


for (let i = 0; 1 < lista.length; i++) {
    const element = array[i];
    cb (element, i, lista)
}