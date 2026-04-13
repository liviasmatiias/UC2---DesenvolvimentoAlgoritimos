// Arrays sao listas de elementos ou uma esrutura de dados maior

const listaCompras = ["batata", "alface", "queijo"]
console.log(listaCompras)

//////////////////////////////////////////////////////////////////

// Arrays armazena elementos de qualquer tipo
const meuArrayDiverso = ["banana", 15, true]
console.log(meuArrayDiverso)

// Arrays tem indices para o "endereçar" seus elementos e SEMPRE começa com 0
// const arrayFrutas = ["banana", "maça", "tomate"]
//           indices ->  0          1        2
// Para acessar esse elemento, basta informar o seu endereço/indice
// const segundoItem = arrayFrutas[2]

arrayFrutas = ["banana", "maça", "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)


//////////////////////////////////////////////////

// PROPRIEDADES DE ARRAY
// Propriedade length: mos diz qual é a quantidade de um array

const pokemon= ["bulbasauro", "squirtle", "charmander"]
const quantidadeItens = pokemon.length
console.log(quantidadeItens)

////////////////////////////////////////////////////////

// Propriedade ou Método Includes(elementos) ; determinase um array contem um determinado elemento. Sempre retorna um true(se sim) ou false(se nao)

const seriesBoas = ["Breaking Bad", "Brooklyn Nine-nine"]

const temBreakingBad = seriesBoas.includes("Breaking Bad")
const temGOT = seriesBoas.includes("Brooklyn Nine-nine")

console.log("Na array seriesBoas, tem Breaking Bad?", temBreakingBad)
console.log("na array seriesBoas, tem GOT", temGOT)