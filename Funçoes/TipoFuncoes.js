// Funçoes:
// Uma função é um bloco de codigo que executa uma tarefa expecifica.
// 
// recebe algo(entrada ou parametros)
// preocessa algo
// entrega um resultado (saida ou retorno)

////////////////////////////////

//1. Funcao Declarada (padrao/sem parametro)
// declarando a função 

function imprimirOlaMundo(){
    console.log("Ola Mundo!") // ação da função
}

// chamada da função para executar
imprimirOlaMundo()


// 2. funcao com parametros
// podemos passar informaçoes para a função. Essas informações sao os parametros que ela vai precisar para executar sua tarefa
///////////////////////////////////////////////////////////
// função soma de dois numeros 
function somar (a,b){
    return a + b
}
// chamada da função
let resultado = somar(3556,4839)
console.log(resultado)

/////////////////////////////////////////////////
// 3.Arrow Function (Funções de seta =>): possuem uma sintaxe mais curta

const multiplicar = (x,y) => x * y
console.log(multiplicar(4,5))
