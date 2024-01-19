function Escreva_meu_nome(nome) {
    return ' meu nome é ' + nome;
}

Escreva_meu_nome('januario');




function verificar_idade (idade){
    if (idade >= 18) {
        console.log(Escreva_meu_nome('januario') + ' Sou  maior idade');
    } else {
        console.log( Escreva_meu_nome('januario') + ' sou menor idade');
    }
}

verificar_idade(15);