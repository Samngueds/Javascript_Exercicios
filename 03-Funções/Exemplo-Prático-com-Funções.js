function CalcularIMC (peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(IMC) {
    if (IMC === 18.5){
       return 'Você esta abaixo do peso Seu IMC e:'
    }else if(IMC >= 18.5  <=25){
        return  'Você esta no Peso ideal Seu IMC e:'

    }else if (IMC >= 25 <=30){
        return  'Você esta acima Do Peso Seu IMC e:'
    }else if (IMC >=30 <=40 ){
        return  'Você Esta Obeso Seu IMC e:'
    
    }else if (IMC > 40){
        return  'Você esta Com Obsidade Grave, Seu IMC e:'
    }
}

(function main () {
const peso = 80;
const altura = 1.69;
const IMC = CalcularIMC (peso , altura);

console.log (classificarIMC(IMC));
console.log (IMC.toFixed(1));
})();

// main();
