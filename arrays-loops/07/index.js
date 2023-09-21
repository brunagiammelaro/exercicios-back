const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let letraA = [];

for (let letra of nomes) {
    if (letra[0] === "A" || letra[0] === "a") {
        letraA.push(letra)
    }
}

console.log(letraA)