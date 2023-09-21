const numeros = [8, 11, 4, 1];
let menorValor = numeros[0];
let maiorValor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] <  menorValor) {
        menorValor = numeros[i];
    }
    if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
    }
}

const diferença = maiorValor - menorValor;
console.log(diferença)