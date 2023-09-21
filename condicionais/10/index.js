const caractere = "maria";

const vogalMaiuscula = ["A", "E", "I", "O", "U"];
const vogalMinuscula = ["a", "e", "i", "o", "u"];
const consoante = ["B", "C", "D", "F", "G", "H", "J", "K","L", "M","N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t","v", "w", "x", "y", "z"];
const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

if (vogalMaiuscula.includes(caractere)) {
    console.log("Vogal maiúscula");
} else if (vogalMinuscula.includes(caractere)) {
    console.log("Vogal minúscula");
} else if (consoante.includes(caractere)) {
    console.log("Consoante");
} else if (numero.includes(caractere)) {
    console.log("Número");
} 
