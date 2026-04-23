const prompt = require('prompt-sync')({sigint: true})

function gritar(){
    
   const frase = "odeio funcoes"
  

   const fraseMaiuscula = frase.toUpperCase()
   console.log(frase)
   console.log(fraseMaiuscula)

}
 gritar()