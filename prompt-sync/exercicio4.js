const prompt = require ("prompt-sync")()

let nome = prompt ("Qual seu nome?")
let idade = prompt ("Qual sua idade?")
let hobby = prompt ("Qual seu hobby?")
let desenhoFav = prompt  ("Qual seu desenho favorito?")
let serieFav = prompt ("Qual sua serie favorita?")
let curiosidade = prompt ("conte uma curiosidade sobre você.")
let time = prompt ("Para qual time você torce?")

console.log(`Meu nome é ${nome}, eu tenho ${idade} anos, o que eu mais gsoto de fazer é ${hobby}. Já de desenho eu gosto muito de ${desenhoFav} e a minha serie favorita é ${serieFav}. Uma curiosidade sobre mim, é que ${curiosidade} e é claro que eu torço para o melhor vulgo ${time}.`)