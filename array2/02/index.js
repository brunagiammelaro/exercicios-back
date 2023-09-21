const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificarPalavra = (palavras) => {
    const resultado = palavras.some((palavra) => {
        return palavra.length > 5 
    })

    if (resultado) {
        console.log("Existe palavra inválida")
    } else {
        console.log("Array válido")
    }
}

verificarPalavra(palavras)