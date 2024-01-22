pessoa = {
    nome: 'jose',
    idade: 20

}


function Gritar (prefixo) {
    console.log(prefixo, this.nome)
}

Gritar()


Gritar.call

Gritar.apply (pessoa, ('olaaaaaaaa'))
Gritar.call (pessoa, ('olaaaaaaaa'))