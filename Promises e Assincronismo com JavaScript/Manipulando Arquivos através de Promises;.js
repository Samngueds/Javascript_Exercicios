const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, tarefas.csv)

const leituraDoArquivo = fs.promises.readFile('tarefas.csv')


leituraDoArquivo
    .then ((arquivo) => arquivo.toString('utf8'))
    .then((texto) => console.log(texto))
    .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
            const [nome, feito] = linha.split[';']
            return {
                nome,
                feito: feito.trim () ==='true'
            }  
    }))
    .then((listaDetarefas) => console.log(listaDetarefas))
    .catch((erro)=> {console.log ('deu ruim', erro)})
