function encontrarCarro(carros, numero) {
       
    let fim = numero + 3      
    let carrosCapturados = carros.slice(numero, fim)
    console.log(carrosCapturados.join(" - "))
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 1;

encontrarCarro(nomes,posicao)