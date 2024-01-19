class Pessoas {
    nome;
    peso;
    altura;

        //metodo abaixo

        constructor(nome,peso,altura){
            this.nome  =  nome;
            this.peso = peso;
            this.altura = altura;
        }


        
        calcular_imc(){
            return this.peso / (this.altura * this.altura);
        }
}

const jose = new Pessoas ('jose', 70, 1.75);
console.log(jose.calcular_imc().toFixed(2));
const januario = new Pessoas ('januario', 50 ,1.20);
console.log(januario.calcular_imc().toFixed(2));