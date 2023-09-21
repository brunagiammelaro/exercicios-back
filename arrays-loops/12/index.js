const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const limiteDentro = 5;

while (filaDeFora.length > 0 && filaDeDentro.length < limiteDentro) {
    const primFora = filaDeFora.shift();
    //if (primFora === undefined) {
        //break
    //}
    filaDeDentro.push(primFora);
}

console.log("Fila de Dentro:", filaDeDentro);
console.log("Fila de Fora:", filaDeFora)

//Utilizar o if + break para interromper o loop caso a fila de fora esteja vazia.