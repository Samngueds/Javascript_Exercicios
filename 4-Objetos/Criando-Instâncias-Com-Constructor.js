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





const januario = new Pessoa ('januario', 23);


const jose = new Pessoa ('jose', 30);


console.log(januario);



