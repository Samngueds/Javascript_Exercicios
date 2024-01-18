const peso = 80;
const altura = 1.69;

const IMC = peso / (altura * altura);

const abaixo_do_peso = (IMC === 18.5);
const peso_normal = (IMC >= 18.5  <=25)
const acima_do_peso =(IMC >= 25 <=30)
const Obeso = (IMC >=30 <=40 )
const Obesidade_grave = (IMC > 40);


if (abaixo_do_peso){
    console.log('Seu IMC e:')
    console.log(IMC.toFixed(1))
    console.log('Você esta abaixo do peso')
}else if(peso_normal){
    console.log('Seu IMC e:')
    console.log(IMC.toFixed(1))
    console.log('Você esta no Peso ideal')
}else if (acima_do_peso){
    console.log('Seu IMC e:')
    console.log(IMC.toFixed(1))
    console.log('Você esta acima Do Peso')
}else if (Obeso){
    console.log('Seu IMC e:')
    console.log(IMC.toFixed(1))
    console.log('Você Esta Obeso')
}else if (Obesidade_grave){
    console.log('Seu IMC e:')
    console.log(IMC).toFixed(1)
    console.log('Você esta Com Obsidade Grave')
}