const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const verificarCidades = (cidades) => {
    const cidadesVerificadas = cidades.filter((cidade) => {
        return cidade.length <= 8
})
    console.log(cidadesVerificadas.join(', '))
}

verificarCidades(cidades)