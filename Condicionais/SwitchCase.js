// SWITCH
// Alternativa para multiplos if/else, quando compramos o mesmo valor com varios casos

let diaDaSemana = 8

switch(diaDaSemana){
    case 1:
    console.log("Hoje é Segunda Feira")
    break

    case 2:
        console.log("Hoje é Terça Feira")
        break

    case 3:
        console.log("Hoje é Quarta Feira")
        break

     case 4:
        console.log("Hoje é Quinta Feira")
        break

    case 5: 
        console.log("Hoje é Sexta Feira")
        break

    case 6: 
        console.log("Hoje é Sabado")
        break

    case 7:
        console.log("Hoje é Domingo")
        break
        default:
            console.log("Dia invalido")
}


// O break evita que os proximos cases sejam executados
// o default é executado quando nenhum case corresponde