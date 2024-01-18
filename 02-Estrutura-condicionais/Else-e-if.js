const numero = 12;
const numero_divisivel_por_5 = (numero % 5) === 0;

if (numero === 0){
    console.log("o numero  e invalido");
} else if (numero_divisivel_por_5) {
    console.log("sim e dividivel por 5")
} else {
    console.log ("nao e  dividivel por 5")
}