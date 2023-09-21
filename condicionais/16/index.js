
const idadeDoAluno = 16;

const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log("Rematrícula realizada com sucesso");
} else if (idadeDoAluno < 18 && possuiResponsavel) {
    console.log("Rematrícula realizada com sucesso")
} else {
    console.log("Não é possível fazer a rematrícula")
}