const rendaMensalEmCentavos = 3000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000;
const valorTotalCurso = 18000;

const valorPorcentagem = (18/100) * rendaMensalEmCentavos;
const tempoQuitação = ((valorTotalCurso - totalJaPagoPeloAluno) / valorPorcentagem);

if (rendaMensalEmCentavos < 2000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (tempoQuitação + mesesDecorridos === 60 || totalJaPagoPeloAluno === valorTotalCurso){
    console.log("Sua dívida está quitada!");
} else {
    const qntsMesesQuitar = Math.ceil(tempoQuitação)
    console.log(`O valor da parcela desse mês é R$ ${valorPorcentagem} reais. Se a renda se manter quitará a dívida em ${qntsMesesQuitar} meses.`);
}