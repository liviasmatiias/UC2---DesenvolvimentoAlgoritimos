const prompt = require ("prompt-sync")()

let nome = prompt("Qual seu nome?")
let profissao = prompt ("Qual sua profissão?")
let objeto = prompt ("Qual sua arma ou objeto?")

console.log(`seu nome é ${nome}, sua profissao é ser ${profissao} e sua "arma" secreta é um ${objeto}`)