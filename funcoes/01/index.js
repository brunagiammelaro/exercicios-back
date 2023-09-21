const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
function numeroAcertos(acertos) {
    let nota = 0;
    for (let i = 0; i < prova.questoes.length; i++) {
        if (prova.questoes[i].resposta === prova.questoes[i].correta) {
            nota += 2
        }
    }
    return nota
}

function corrigirProva(prova) {
    const acertos = numeroAcertos()
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos/2} questões e obteve nota ${acertos}.`)
}

corrigirProva(prova)