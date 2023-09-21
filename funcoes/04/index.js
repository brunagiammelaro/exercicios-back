const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor) {
        this.saldo += valor
        
        const historico1 = {
            tipo: "Deposito",
            valor: valor
        }
        this.historicos.push(historico1)

        return `Depósito de R$${(valor/100)} realizado para o(a) cliente: ${this.nome}`
    },
    sacar: function(valorDois) {
        
         if (valorDois > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        } else if (valorDois < this.saldo) {
            this.saldo -= valorDois
        }

        const historico2 = {
            tipo: "Saque",
            valor: valorDois
        }
        this.historicos.push(historico2)

        return `Saque de R$${valorDois/100} realizado para o(a) cliente:${this.nome}`
    },
    extrato: function() {
            console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo/100}`)
            console.log('Histórico:') 
                for (const historico of this.historicos) {
                    console.log(`${historico.tipo} de R$${historico.valor/100}`)
                }
                         
        }
    }

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
