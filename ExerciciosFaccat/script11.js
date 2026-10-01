// Disciplina   : [Lógica de Programação com Java Script]
// Professor   : Jailson Costa dos Santos
// Descrição   : Uma revendedora de carros usados paga a seus
// funcionários vendedores um salário fixo por mês, mais uma comissão
// também fixa para cada carro vendido e mais 5% do valor das vendas
// por ele efetuadas. Escrever um algoritmo que leia o número de
// carros por ele vendidos, o valor total de suas vendas,
// o salário fixo e o valor que ele recebe por carro vendido.
// Calcule e escreva o salário final do vendedor. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 05/09/2026


function salarioConcessionaria ( ) {
let carrosVendidos = parseInt(prompt("Infome a quantidade de carros vendidas pelo funcionario: "))
let salarioFixo = parseFloat(prompt("Informe o salario fixo do funcionario: "))
alert("A quantidade de carros vendidos esse mês pelo funcionario foi de: " + carrosVendidos)
let comissaoFixa = 0.5
let salarioFinalDoVendedor = (carrosVendidos * salarioFixo) + salarioFinalDoVendedor / comissaoFixa


}

alert("O salario final do vendedor com a adição da comissão e vendas é: " + salarioConcessionaria())
