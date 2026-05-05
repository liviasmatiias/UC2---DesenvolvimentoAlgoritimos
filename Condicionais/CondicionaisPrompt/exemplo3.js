// maior ou menor idade com operador intermediario

const prompt = require("prompt-sync")()

// pede idade do usuario
let idade = Number(prompt("Digite sua idade "))

let resultado = idade >= 18 ? "Maior de idade" : "Menor de Idade"
console.log(resultado)