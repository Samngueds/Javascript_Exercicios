const lista = [{nome: 'jose'}, {nome: 'januario'}, {nome: 'andressa'}]

console.log(
    lista.map(e,nome)
        .filter((e) => e.startsWit('a'))
        .join('; ')


)
//console.log(lista.map((e) => e.nome).join('; '))



const elementosEmhtml = lista
    .filter((e) => e.nome.startsWit('a'))
    .map(e => `${e.nome}</li>`)
    .join('')


console.log(elementosEmhtml)

