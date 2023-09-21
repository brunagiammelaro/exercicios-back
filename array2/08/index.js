const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novasFrutas = frutas.map((elemento, index) => {
   
    return `${index} - ${elemento[0].toUpperCase()}${elemento[1].toLowerCase()}`
})

console.log(novasFrutas)

//correção

const novasFrutas2 = frutas.map((fruta, indice) => {
   
    return `${indice} - ${fruta.slice(0, 1).toUpperCase()}${fruta.slice(1).toLowerCase()}`
})

console.log(novasFrutas2)