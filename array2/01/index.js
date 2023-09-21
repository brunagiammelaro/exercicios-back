const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const encontrarLivro = (estante, nome) => {
    const resultado = estante.findIndex((livro) => {
        return livro === nome
    })
    console.log(`O livro está na posição ${resultado + 1}`)
} 
    
encontrarLivro(livros, nomeDoLivro)