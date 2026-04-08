const prompt = require ("prompt-sync")()

let poção = prompt("que poção voce quer fazer?")
let erva = prompt("quantas gramamas de erva sera utilizada?")
let aguaQuente = prompt("quantas ml de agua quente sera utilizada?")

console.log("voce fez uma poção " + poção + " com " + erva + " gramas de erva, e " + aguaQuente + " mls de agua quente. ")