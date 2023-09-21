const original = [5, 7, 13, 17, 26, 34, 118, 245];

let numeros = [];

for (let num of original) {
    if (num >= 10 && num <= 20 || num > 100) {
        numeros.push(num);
           }
}
console.log(numeros)