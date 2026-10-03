// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler: número da conta do cliente,
// saldo, débito e crédito. Após, calcular e escrever o saldo atual
// (saldo atual = saldo - débito + crédito). Também testar se saldo
// atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo',
// senão escrever a mensagem 'Saldo Negativo'.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function calcularSaldoAtual() {
    let numeroConta = parseInt(prompt("Digite o número da conta do cliente: "))
    let saldo = parseFloat(prompt("Digite o saldo do cliente: "))
    let debito = parseFloat(prompt("Digite o débito do cliente: "))
    let credito = parseFloat(prompt("Digite o crédito do cliente: "))
    let saldoAtual = saldo - debito + credito
    alert("Numero da conta: " + numeroConta + "\nSaldo Atual: R$ " + saldoAtual.toFixed(2))
    if (saldoAtual >= 0) {
        alert("Saldo Positivo: R$ " + saldoAtual.toFixed(2))
    } else {
        alert("Saldo Negativo: R$ " + saldoAtual.toFixed(2))
    }    
    }
calcularSaldoAtual()