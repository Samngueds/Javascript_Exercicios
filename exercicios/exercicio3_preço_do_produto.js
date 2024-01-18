//preço
//const preço_do_produto = 19.90;
const preço_da_etiqueta_do_produto =25.90;

const debito = 1 ;

const pix = 2

const em_2X = 3

const em_4x = 4

if (debito === 1){
    console.log('você descidiu paga no debito seu desconto e de 10%')
    console.log('o valor  e:')
    console.log(preço_da_etiqueta_do_produto - (preço_da_etiqueta_do_produto * 0.1) );
} else if (pix) {
    console.log('você descidiu paga via Pix seu desconto e de 15%')
    console.log('o valor  e:')
    console.log(preço_da_etiqueta_do_produto - (preço_da_etiqueta_do_produto * 0.15));
} else if (em_2X){
    console.log('você descidiu paga em 2x')
    console.log('o valor  e:')
    console.log(preço_da_etiqueta_do_produto)
} else {
    console.log('você descidiu paga em 4x, você vai paga 10 de juros')
    console.log('o valor  e:')
    console.log(preço_da_etiqueta_do_produto + (preço_da_etiqueta_do_produto * 0.1))
}