//=========================================================================
// OBJETOS
//=========================================================================
// Definição:
// Um objeto é uma coleçao de "chaves" e "valores" (propriedades)
// È forma de organizar informaçoes relacionadas dentro de uma unica variavel.
// exemplo basico de objeto
let pessoa = {
    nome: "Romario",
    idade: "56",
    profissao:"corredor",
    gostaCoxinha: false,
    cidade: "sao leopoldo",
    hobbies: ["correr", "escrever", "criticar a sociedade da coxinha"]
}
console.log(pessoa)

//=======================================================================
// ACESSANDO PROPRIEDADES DE UM OBJETO
//=======================================================================

// pODEMOS ACESSAR OS VALORES DE DUAS FORMAS:
 // 1. usando a notação de ponto:
 console.log("nome da pessoa: ", pessoa.nome )
 console.log("idade da pessoa: ", pessoa.idade)
 // 2. usando colchetes
 console.log("cidade da pessoa: ", pessoa["cidade"])
 //------------------------------------------------------
 // ADICIONANDO OU ALTERANDO PROPRIEDADES

 // alterando uma propriedade ja existente:
 pessoa.profissao = "Desenvolvedor de sistemas"
 console.log("Objeto atualizado! Romario nao é mais corredor, ele agora é ", pessoa.profissao)

 //Adicionando uma nova prpriedade
 pessoa.time = "Brasil"
console.log("Objeto atualizado! Nova propriedade time adionada. No caso o time é o", pessoa.time)

//=======================================================================
// Métodos e Objetos

// Objetos podem ter funçoes como propriedades, só que dai chamamos de metados.
let carro = {
    marca: "Porsche",
    modelo: "911",
    ano: 2023,

    // metodo acelerar
    acelerar: function(){
        console.log("o carro esta acelerando! vrum vrum")
    },
    // metodo buzinar
    buzinar: function(){
        console.log("bibibibibibibibib")
    }
}
console.log(carro.marca)
carro.acelerar()
carro.buzinar()

//=====================================================================

//A acessando objetos dentro de objetos{{}}

    let donoDoPet = {
        nome:"Greg da 261T",
        pet: {
            nomeDoPet: "Luna",
            raca: "pretinha",
            pet: 1
        }
    }
    console.log(donoDoPet.pet.nomeDoPet)
    console.log(donoDoPet)
    console.log(donoDoPet.pet.raca)
    console.log(donoDoPet.pet.idade)