const prompt = require("prompt-sync")()

let prato = prompt("Escolha um prato maluco: \n 1- pizza de sorvete \n 2 - hamburguer de gelatina \n 3 - sushi de chocolate \n 4 - batata frita com calda de morango \n 5 - spaghetti de bala \n Digite:")

switch(prato){
    case "1":
    console.log("seu prato maluco é pizza de sorvete")
    break
    case "2":
    console.log("seu prato maluco é hamburguer de gelatina")
    break
    
    case "3":
    console.log("seu prato maluco é sushi de chocolate")
    break

    case "4":
    console.log("seu prato maluco é batata frita com calda de morango")
    break

    case "5":
    console.log("seu prato maluco é spaghetti de bala")
    break 
    default: 
    console.log("voce nao tem prato maluco")
    
}