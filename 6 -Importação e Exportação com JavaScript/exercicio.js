const numeros_sorteados = [10, 5, 19, 50, 10, 98, 23, 99, 23, 37, 53];
let i = 0;



function gets () {
    const valor = numeros_sorteados[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}


module.exports = { gets ,print
   // gets: gets,
   // print: print
};