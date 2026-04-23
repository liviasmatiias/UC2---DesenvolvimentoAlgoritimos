// Importando a biblioteca 
const prompt = require('prompt-sync')({sigint: true})

// Função que pede numeros, calcula e imprime
function calcularEimprimir(){
    const a = Number(prompt("digite o primeiro numero:"))
    const b = Number (prompt("digite o segundo numero:"))

    soma = a + b
    subtracao = a - b
    multiplicacao = a * b
    divisao = a/b
    modulo = a%b
    console.log("resultados:")

    console.log("Soma:", soma)
    console.log("Subtracao:", subtracao)
    console.log("Multiplicacao:", multiplicacao)
    console.log("Divisao:" , divisao)
    console.log("Modulo:", modulo)
    
}
calcularEimprimir()