const prompt = require("prompt-sync")()

let codigo = Number(prompt("Digite seu codigo:"))
if(codigo %  777 === 0){
    console.log("ACesso LIberado")
}else{
    console.log("ALARME ATIVADO")
}

