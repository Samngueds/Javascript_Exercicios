function soma (x){

    return function  (y) {
        return x + y
    }

}

console.log (soma (10) (32))

const ValorX = soma(10)


console.log (ValorX(20))
console.log (ValorX(30))
console.log (ValorX(40))




