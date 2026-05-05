// conta - switch case

// importa a biblioteca prompt -sync

const prompt = require("prompt-sync")()
let opção = prompt ("Escolha uma opção: \n 1 - Ver saldo \n 2 - Depositar \n 3 - Sair \n Digite: ")

switch (opção){
    case "1": 
    console.log("Seu saldo é R$ 100")
    break
    case "2":
    console.log("Deposito realizado")
    break
    case "3":
    console.log("Saindo do sistema.. ")
    break
    default:
    console.log("Opção Invalida")
}