// A propriedade length nos diz qual é o tamanho de uma string, incluindo os espaços.

const nome = "joao NaoSei Cavalo da Silva "
console.log(nome.length)


const nome2 = "Monkey D. Luffy"
console.log(nome2.length)


//////////////////////////////////////////
// Método: tolowerCase ()
// Transforma todas as letras da string em miniscula 

const frase = " O DIa Esta LINdoooo DeMAis!"
const fraseMinuscula = frase.toLocaleLowerCase()

console.log(fraseMinuscula)

///////////////////////////////////////
// metodo: toUpperCAse()
// transforma todas as letras da string em maiuscula

const frase2 = "o dia esta Terminando"
const fraseMaiuscula = frase2.toUpperCase()
console.log(fraseMaiuscula)

///////////////////////////////////////
// metodo; trim()
// retira espaçoes que existem antes e depois de sua string (util em formularios e logins)

const email = "                                             senaquinho@senacrs.com              "
console.log(email.trim())


/////////////////////////////////
// método: incluides(caracteres): determina se um conjunto de caracteres pode ser contratado dentro 
// de uma outra string, retorna um valor booleando true ou false

const frase3 = "hoje comi pao" 
console.log(frase3.includes("pao")) 
console.log(frase3.includes("batata frita"))


const frase4 = "A força de um guerreiro nao vem de vencer sozinho, mas nunca desistir de lutar pelo que acredita"

console.log(frase4.includes("guerreiro"))
console.log(frase4.includes("desiste"))
console.log(frase4.includes("luta"))
console.log(frase4.includes("acreditar"))


////////////////////////////////////////
// RepleaceAll: (chars1, chars2): troca todas as ocorrencias de um conjunto de caracteres(chars1) por alguma outra coisa (chars2)


const frase5 = "hoje comi cenoura, adoro cenoura"
const novaFrase5 = frase5.replaceAll("cenoura", "batata")
console.log(novaFrase5)





