const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 40000;

const valorRestante = valorDoProduto - valorPago;
const valorParcela = valorDoProduto/quantidadeDoParcelamento;
const parcelasPagas = valorPago/valorParcela;

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$${(valorParcela/100).toFixed(2)} reais`)