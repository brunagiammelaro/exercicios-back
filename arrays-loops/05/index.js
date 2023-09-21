const original = [1, 4, 12, 21, 53, 88, 112];
const numerosPares = [];

for (let num of original) {
    if (num % 2 === 0) {
    numerosPares.push(num);
    }
}

console.log(numerosPares)