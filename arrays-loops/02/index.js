const letras = ["A", "a", "B", "C", "E", "e"];
let soma = 0
let letraEncontrada = false;

for (let item of letras) {
    if (item === "e" || item === "E") {
        soma += 1;
    } 
}

if (soma === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
} else {
    console.log(`Foram encontradas ${soma} letras "E" ou "e". `);
}






