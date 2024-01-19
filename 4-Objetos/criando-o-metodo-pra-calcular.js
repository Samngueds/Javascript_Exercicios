class carro {
    marca;
    cor;
    gasto_medio_por_km;

    constructor (marca, cor, gasto_medio_por_km) {

        this.marca = marca;
        this.cor = cor;
        this.gasto_medio_por_km = gasto_medio_por_km;

    }


    calcular_gasto_de_percurso(distacia_em_km, valor_do_cobustivel){
        return distacia_em_km * this.gasto_medio_por_km * valor_do_cobustivel
    }

}


const uno_com_escada = new carro ('fiat','branco',1/12);

const Fusca_azul = new carro ('fiat', 'azul',1/12);

console.log ('o seu gasto usando o Fiat Foi  de: '+ uno_com_escada.calcular_gasto_de_percurso(80,5).toFixed(1));

console.log ('o seu gasto usando o fusca o foi de: '+ Fusca_azul.calcular_gasto_de_percurso(53,5).toFixed(1));
