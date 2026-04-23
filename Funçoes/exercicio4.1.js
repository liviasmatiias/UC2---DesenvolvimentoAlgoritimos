function converção(reais){
    let dolares = (reais * 0.20)
    let boliviar = (reais * 95.45)
    let euro = (reais * 0.17)

 console.log(`${reais} vale ${dolares.toFixed(2)} dolares`)
 console.log(`${reais} vale ${boliviar.toFixed(2)} boliviares`)
 console.log(`${reais} vale ${euro.toFixed(2)} euros`)
}
 converção(1234)


 // FORMA 1
 function converter(valor){
    const dolar = valor * 0.20
    const boliviar = valor * 95.5
    const euro = valor * 0.17

    console.log("Dolar: ", dolar)
    console.log("Boliviar: ", dolar)
    console.log("Euro: ", euro)
 }

 converter(3000 )