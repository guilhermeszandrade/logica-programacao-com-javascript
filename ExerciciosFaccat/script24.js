// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler o salário fixo e o valor das vendas efetuadas
// pelo vendedor de uma empresa. Sabendo-se que ele recebe uma
// comissão de 3% sobre o total das vendas até R$ 1.500,00 mais
// 5% sobre o que ultrapassar este valor, calcular e escrever o seu
// salário total. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function calcularSalarioTotal() {
    let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "))
    let vendasEfetuadas = parseFloat(prompt("Digite o valor das vendas efetuadas: "))
    let comissao = 0
    if (vendasEfetuadas <= 1500) {
         comissao = vendasEfetuadas * 0.03  
        let salarioTotal = salarioFixo + comissao
        return salarioTotal
    } else {
         comissao = (1500 * 0.03) + ((vendasEfetuadas - 1500) * 0.05) 
        let salarioTotal = salarioFixo + comissao
        return salarioTotal
    }
    }
    alert("o salario total do vendedor é: R$ " + calcularSalarioTotal().toFixed(2))