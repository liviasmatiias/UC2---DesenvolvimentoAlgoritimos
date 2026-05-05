const prompt = require("prompt-sync")()

let opcao = prompt("Escolha seu Portal Magico: \n 1 - Floresta \n 2 - Deserto \n 3 - Gelo \n Digite")

switch(opcao){
   case "1":
   console.log("Seu portal Magico é a FLORESTA") 
   break

   case "2":
   console.log("seu portal magico é o DESERTO")
   break

   case "3":
    console.log("seu portal magico é o GELO")
    break

    default: 
    console.log("Voce nao escolheu um portal")
}