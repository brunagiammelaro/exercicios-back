const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]
const proibidos = ["cerveja", "vodka"]

const verificarLista = (proibidos, palavras) => {    
    const resultado = palavras.some((palavra) => {
        return proibidos.includes(palavra)
    })

    if (resultado) {
        console.log("Revise sua lista, João. Possui bebida com venda proibida!")
    } else {
    console.log("Tudo certo, vamos as compras!")
    }
}

verificarLista(proibidos, palavras)