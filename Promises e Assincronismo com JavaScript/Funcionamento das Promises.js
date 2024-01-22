const  numerorandomico = new promise ((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt (Math.radom() * 100)
        resolve(numero)
    }, 1000)
    
    
    console.log('dinosarios')
    
    
    
    //...
    //...
    //resolve()
    //...
    //..
    //reject()
})

numerorandomico
    .then((vaule) => {
        console.log(vaule)
        return vaule * 200
    })
    .then((vaule) => {
        console.log(vaule)
        vaule - 3
    })
    .then((vaule) => {
        console.log(vaule)
    })
    .catch((error) => {
        console.log(error)
    }) 
    .finally(() =>{
        console.log('finalizou')
    })

/*try {

} catch (erro) {

} finally {

}*/