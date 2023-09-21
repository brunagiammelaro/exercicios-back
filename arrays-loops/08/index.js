const numeros = [3, 24, 1, 8, 11, 7, 15];
let maiorNum = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNum) {
        maiorNum = numeros[i]
    }
}

console.log(`O maior número é: ${maiorNum}`)

//Correção do professor, ele utilizou o for of.

//let maiorAteAgora = numeros[0]
//for (let num of numeros) {
//}
//o restante do codigo está igual