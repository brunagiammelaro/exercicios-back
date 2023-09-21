const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

//a) Organize o array na ordem inversa e transforme em uma única string separada por vírgulas de forma q seja impresso:

const frutasInvertidas = frutas.reverse().join(", ")
console.log(frutasInvertidas)


//b) Remova o primeiro e último item do array original e adicione a fruta Melão ao novo array da seguinte forma:

frutas.reverse()
frutas.splice(0, 1)
frutas.splice(frutas.length -1, 1, "Melão")
console.log(frutas)