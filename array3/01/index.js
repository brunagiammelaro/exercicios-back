//a) Ordenar o array abaixo em ordem crescente.
const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

numeros.sort((a, b) => {
    return a- b
})

console.log(numeros)

//b) Ordenar o array abaixo em ordem decrescente.

numeros.sort((a, b) => {
    return b - a
})

console.log(numeros)

//c) Ordenar o array abaixo em ordem crescente, com base nos valores dos pontos de código Unicode.

numeros.sort()

console.log(numeros)

//d) Ordenar o array abaixo em ordem alfabética.

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort((a, b) => {
    return a.localeCompare(b)
})

console.log(frutas)

//correção da letra d

const frutasEmOrdemAlf = frutas.sort(function(a, b) {
    if(a.toLowerCase() > b.toLowerCase()) {
        return 1
    }
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1
    }
    return 0
})
console.log(frutasEmOrdemAlf)
//e) Ordenar o array abaixo em ordem alfabética decrescente.

frutas.sort((a, b) => {
    return b.localeCompare(a)
})

console.log(frutas)

//f) Ordenar o array abaixo em ordem crescente, de acordo com a quantidade de caracters (do que tem menos caracteres, para o que tem mais).

const maisLetras = frutas.reduce((maior, menor) => (maior.length < menor.length ?  menor : maior))

console.log(maisLetras)

//correção f

const caracteresFrutas = frutas.sort(function(a, b) {
    if(a.length() > b.length()) {
        return 1
    }
    if (a.length() < b.length()) {
        return -1
    }
    return 0
})