/* 

Programa para calcular um valo de uma viagem

variaveis:
1 - Preço

2 - gasto por km

3 - distacia da  viagem

*/



const valor_do_combustvel = 5.8;

const  gasto_por_km = 1;

const  distacia_da_viagem_em_km = 1580;


const litros_de_cobustivel_consumidos = distacia_da_viagem_em_km / gasto_por_km;

const  valor_gasto = litros_de_cobustivel_consumidos * valor_do_combustvel;




console.log (valor_gasto.toFixed(2));
