class pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.ano_de_Nascimento = 2024 - idade;
    }


    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} `);
    }


}


function comparpessoas (p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha(o) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velha(o) que ${p1.nome}`);
    } else {
        console.log (`${p1.nome} e ${p2.nome} tem a mesma idade `);
    }
}

const  januario = new pessoa ('januario', 22);
const jose = new pessoa ('jose', 18)

comparpessoas (januario, jose);