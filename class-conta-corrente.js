class ContaCorrente{
    constructor(nome, numero, agencia, saldo){
        this.nome = nome;
        this.agencia = agencia;
        this.numero = numero;
        this.saldo = saldo;
    }
    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
   
}

const contaDoAntonio = new ContaCorrente("Antônio Fernandes", "123456", "2653", 5000);
const contaDoRenan = new ContaCorrente("Renan Lima", "654378", "7687", 1000);

console.log(`Saldo da conta corrente do Antônio ${contaDoAntonio.saldo}`)
console.log(`Saldo da conta corrente do Renan ${contaDoRenan.saldo}`)

contaDoAntonio.sacar(1000);
contaDoRenan.depositar(3000)

console.log(`Saldo atual da conta corrente do Antônio ${contaDoAntonio.saldo}`)
console.log(`Saldo atual da conta corrente do Renan ${contaDoRenan.saldo}`)
