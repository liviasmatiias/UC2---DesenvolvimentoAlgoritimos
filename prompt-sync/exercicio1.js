const prompt = require ("prompt-sync")()

let nome = prompt ("qual seu nome?")
let idade = prompt ("qual sua idade?")
let cidade = prompt ("qual sua cidade?")

console.log(`Olá,  ${nome} voce tem ${idade}, e mora em ${cidade}.`)