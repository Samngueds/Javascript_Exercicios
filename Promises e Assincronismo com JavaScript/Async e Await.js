const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, tarefas.csv)



async function buscaArquivo () {
    
    try {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoarquivo = arquivo.toString('utf8')
    console.log(textoDoarquivo)
    } catch {
        console.log(error)
    } 
     finally {
        console.log('finalizou')
    }
}


buscaArquivo()