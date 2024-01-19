const { gets, print } = require('./exercicio.js');

const quantidade_De_Alunos = gets ();
let maior_valor = 0;


for (let i = 0; i < quantidade_De_Alunos; i++) {
    const numero_sorteado = gets();
    if (numero_sorteado > maior_valor) {
      maior_valor = numero_sorteado
    }

}


print(maior_valor);
