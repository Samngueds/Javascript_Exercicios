class Pessoas {
    nome;
    Idade;
    Peso;
    altura;

        //metodo abaixo

        constructor(nome,peso,altura){
            this.nome  =  nome;
            this.peso = peso;
            this.altura = altura;
        }

        calcular_imc(){
            return imc = this.peso / this.altura (this.altura * this.altura);
        }
}