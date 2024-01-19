//preço
//const preço_do_produto = 19.90;

function Aplica_descontos (Valor_do_produto, desconto){
    return (Valor_do_produto - (Valor_do_produto * (desconto/100)));
}

function Aplica_Juros (Valor_do_produto, juros) {
    return (Valor_do_produto + (Valor_do_produto * (juros/100)));
}


const Valor_do_produto =25.90;

const debito = 1;
const pix = 2;
const em_2X = 3;
const em_4x = 4;

function valor_A_Pagar(Valor_do_produto) {

    if (debito === 4) {
        return 'Você decidiu pagar no débito. Seu desconto é de 10%. O valor é ' + Aplica_descontos(Valor_do_produto, 10);
    } else if (debito === 2) {
        return 'Você decidiu pagar via Pix. Seu desconto é de 15%. O valor é ' + Aplica_descontos(Valor_do_produto, 15);
    } else if (em_2X === 3) {
        return 'Você decidiu pagar em 2x. O valor é ' + Valor_do_produto;
    } else if (em_4x === 4) {
        return 'Você decidiu pagar em 4x. Você vai pagar 10% de juros. O valor é ' + Aplica_Juros(Valor_do_produto, 10);
    }
}

console.log(valor_A_Pagar(Valor_do_produto));






