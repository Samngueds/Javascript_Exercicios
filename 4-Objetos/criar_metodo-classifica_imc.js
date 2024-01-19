class Pessoa {
    nome;
    peso;
    altura;

    
    constructor(nome,peso,altura){
        this.nome  =  nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    
    calcular_imc() {
        return this.peso / (this.altura * this.altura);
    }
    
    
    classificar_imc() {
        const imc = this.calcular_imc()
        if (imc < 18.5){
            return (this.nome + ' Seu IMC e ' + imc.toFixed(1) + ' Você esta abaixo do peso');
        }else if(imc >= 18.5  <= 25){
            return (this.nome + ' Seu IMC e ' + imc.toFixed(1) + ' Você esta no Peso ideal');
        }else if (imc >= 25 <= 30){
            return (this.nome + ' Seu IMC e ' + imc.toFixed(1)  + ' Você esta acima Do Peso');
        }else if (imc >=30 <= 40 ){
            return (this.nome + ' Seu IMC e ' + imc.toFixed(1)  + ' Você Esta Obeso');
        }else if (imc > 40){
            return (this.nome + ' Seu IMC e ' + imc.toFixed(1)  + ' Você esta Com Obsidade Grave');
        }
    } 


}




const januario = new Pessoa ('januario', 95 , 1.60);
console.log(januario.classificar_imc());