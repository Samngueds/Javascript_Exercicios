const { gets, print } = require('./exercicio.js');

const numeros_sorteados = [];

for (let i = 0; i < 5; i++) {
  const numero_sorteado = gets();
  numeros_sorteados.push(numero_sorteado);
}

let maior_valor = 0;

for (let i = 0; i < numeros_sorteados.length; i++) {
  const numero_atual = numeros_sorteados[i];
  
  if (numero_atual > maior_valor) {
    maior_valor = numero_atual;
  }
}

print(maior_valor);
