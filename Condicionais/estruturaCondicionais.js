//  ESTRUTURAS CONDICIONAIS EM JAVASCRIPT
//----------------------------------------
// Definição: permitem executar codigos diferentes dependendo de certas condicoes 
//------------------------------------------

// IF (Se)

let idade = 18
if(idade >= 18){
 console.log("Você é maior da idede.")
}

// O codigo dentro do bloco{} so sera executado se a condição for verdadeira
// ---------------------------------------------------------------
// ELSE (Senão)

let idade2 = 16
if(idade >= 18){
    console.log("Voce é maior de idade!")
}else{
    console.log("Voce é menor de idade parça")
}

// O else é executado apenas quando a condição do if é falsa
//-------------------------------------------------------------
// ELSE IF (Senão se)

let nota = 75
if(nota >= 90){
    console.log("Parabens! voce nao e mais um cavaloo, e tirou A.")

}else if(nota >= 70 ){
    console.log(" Voce tirou B. ")

}else if(nota >= 50){
    console.log("Voce tirou C.")

}else{
    console.log("Voce reprovou.")
}

// =======================================================

// OPERADORES LÓGICOS
// podemos combinar condicoes usando operadores
// && -> E
// || -> OU
// !  -> NAO 
let idade3 = 20
let temCarteira = true

if(idade3 >=18 && temCarteira){
    console.log("pode dirigir!!!")
}else{
    console.log("NO puede")
}



