const prompt = require('prompt-sync')({sigint: true})

function seuSuperPoder(){
const pergunta = (prompt("Qual seu superpoder favorito: "))

console.log(`Uau! Ser capaz de ${pergunta}`)
}

seuSuperPoder()