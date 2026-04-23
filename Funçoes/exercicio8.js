const prompt = require('prompt-sync')({sigint: true})

    function qualSuaIdade(){
        const i = (prompt("Qual sua idade?"))
        const m = i * 12
        
        console.log(` Voce tem aproximadamente ${m} meses `)
    }
    qualSuaIdade()