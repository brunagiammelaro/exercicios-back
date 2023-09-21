function dividirGrupos(nomes, numero) {
    
    for (let i = 0; i < nomes.length; i += numero) {
        const grupo = nomes.slice(i, i + numero)
        console.log(`Grupo ${Math.floor(i/ numero) + 1}: ${grupo.join(", ")}`)
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'André', 'João', 'lucas'];
const tamanhoDoGrupo = 4;

dividirGrupos(nomes, tamanhoDoGrupo)