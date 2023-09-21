//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 130.00;

const descCredito = valorDoProduto - ((5 / 100) * valorDoProduto);
const descCheque = valorDoProduto - ((3 / 100) * valorDoProduto);
const descDebitoDin = valorDoProduto - ((10 / 100) * valorDoProduto);

if (tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${descCredito.toFixed(2)} reais`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${descCheque.toFixed(2)} reais`);
} else if (tipoDePagamento === "cheque" || "dinheiro") {
    console.log(`Valor a ser pago: R$${descDebitoDin.toFixed(2)} reais`);
}