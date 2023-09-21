const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let num of original) {
    if (num % 2 === 0) {
    pares.push(num);
    } else if (num % 2 !== 0) {
    impares.push(num);
    }
} 

console.log(pares)
console.log(impares)