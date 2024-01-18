/* 

Programa para calcular um valo de uma viagem

variaveis:
1 - Preços de cosbustiveis
2-  o tipo de cosbustivel q ta no seu carro
3 - gasto medio de cosbustivel por km
4 - distacia da  viagem
*/



const Preço_da_Gazolina = 5.8;
const Preço_do_etanol = 2.10;
const  gasto_por_km = 10;
const  distacia_da_viagem_em_km = 580;
const tipo_de_combustivel = 'Gazolina'

const litros_de_cobustivel_consumidos = distacia_da_viagem_em_km / gasto_por_km;
const  gazonila = litros_de_cobustivel_consumidos * Preço_da_Gazolina;
const  etanol = litros_de_cobustivel_consumidos * Preço_do_etanol

/*minha resposta:
if (gazonila){
    console.log ("se for gazolina o valor e:")
    console.log (gazonila.toFixed(2));
} if (etanol) {
    console.log ("se for etanol o valor e:")
    console.log (etanol.toFixed(2));
}
*/

//respota certa:
if (tipo_de_combustivel==='Gazolina') {
    console.log ("se for gazolina o valor e:")
    console.log (gazonila.toFixed(2));
} else {
    console.log ("se for etanol o valor e:")
    console.log (etanol.toFixed(2));
}


