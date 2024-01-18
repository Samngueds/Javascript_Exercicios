//notas:
const nota_1 = 9;

const nota_2 = 9;

const nota_3 = 7;

const media = (nota_1 + nota_2 + nota_3) / 3;

const reprovado = (media < 5);

const recuperaçao = (media > 5 <= 7);
// ou (media > 5 && media <=7);
const Aprovado = (media >= 7);

if (Aprovado) {
    console.log('você foi Aprovado a sua media e:')
    console.log(media.toFixed(1));
} else if (recuperaçao) {
    console.log('você esta em Recuperão a sua media e:')
    console.log(media.toFixed(1));
} else {
    console.log('você foi Reprovado a sua media e:')
    console.log(media.toFixed(1));
}
