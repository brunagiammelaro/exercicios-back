const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorCidade = cidades.reduce((acumulador, elementoAtual) => elementoAtual.length > acumulador.length ? elementoAtual : acumulador)

console.log(maiorCidade)