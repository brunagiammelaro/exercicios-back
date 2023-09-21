const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
       let precoTotalItensTexto = `${this.calcularTotalAPagar()/100}`

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
        console.log(`Total a pagar: R$${precoTotalItensTexto} reais`);
    },
    addProduto: function (produto) {
        let indiceProdutoExistente = -1

        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id === produto.id) {
                indiceProdutoExistente = i
                break
            }
        }

        if (indiceProdutoExistente === -1) {
            this.produtos[this.produtos.length] = produto
        } else {
            this.produtos[indiceProdutoExistente].qtd += produto.qtd
        }
    },
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log('');

        let totalItens = this.calcularTotalDeItens();
        let totalPagar = this.calcularTotalAPagar();
    
        for (let i = 0; i < this.produtos.length; i++) {
            let produto = this.produtos[i]
            
            console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$${produto.precoUnit/100}`);
        }
            
        let precoTotalItensTexto = `${totalPagar/100}`

        console.log('');
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$${(totalPagar/100).toFixed(2)} reais`);
        
    },
    calcularTotalDeItens: function() {
        let totalItens = 0;
        
        for (const produto of this.produtos) {
            totalItens += produto.qtd;
        }
        return totalItens
    },
    calcularTotalAPagar: function() {
        let totalPagar = 0;
    
        for (const produto of this.produtos) {
            totalPagar += produto.qtd * produto.precoUnit;
        }
        return totalPagar
    },
    calcularDesconto: function() {
        let totalItens = this.calcularTotalDeItens();
        let totalPagar = this.calcularTotalAPagar();

        let descontoPorItens = 0
        let descontoPorTotal = 0

        if (totalItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit
            for (let i = 1; i < this.produtos.length; i++) {
                if (this.produtos[i].precoUnit < descontoPorItens) {
                    descontoPorItens = this.produtos[i].precoUnit
                }
            }
        }

        if (totalPagar > 100) {
            descontoPorTotal = totalPagar * 0.1
        }
        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal
}
}

console.log(carrinho.calcularDesconto()/100)

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};

carrinho.addProduto(novaBermuda)

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novoTenis)

carrinho.imprimirResumo()
carrinho.imprimirDetalhes()

console.log(carrinho.calcularDesconto()/100)





