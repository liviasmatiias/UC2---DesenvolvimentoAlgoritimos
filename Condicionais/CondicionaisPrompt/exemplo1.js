// VERIFICANDO SE O NUMERO É PAR OU IMPAR
const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número:"))

// COMNDICIONAIS IF / ELSE
if(numero % 2 === 0){
    console.log(" Esse numero é PAR")
}else {
    console.log("Esse numero é ÍMPAR")
}