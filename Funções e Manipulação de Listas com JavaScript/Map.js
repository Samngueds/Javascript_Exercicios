class pessoa {
    constructor (nome) {
        this.name = nome
    }
}


const lista = [ new pessoa ('sousa'), new pessoa ('januario'),new pessoa ('maurio'), new pessoa ('calos'), new pessoa ('jose'),new pessoa ('maria')]


/*for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.name)
}
*/

const listaNomes =  lista.map ( (element, i) => element.name)

    // usando o indice   return `${i}-${element.name}`

console.log (listaNomes)