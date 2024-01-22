const pessoa = {
    genero: 'mascullino'
}


const  januario = {
    nome: 'januario',
    idade: 29 
    // herda  dados de  outras variavel
    __proto__: pessoa
}

pessoa.genero = 'masculino'

console.log(januario.pessoa)

Pessoa.prototype.falar =function (){
    console.log(`meu  nome é : ${this.nome}`)
}

// mesma coisa:
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }

    falar() {
        console.log(`meu  nome é : ${this.nome}`)
    }


}





function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}


new pessoa ('januario', 34)