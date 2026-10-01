// Disciplina   : [Lógica de Programação com Java Script]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler o salário mensal atual
// de um funcionário e o percentual de reajuste. Calcular e escrever o
// valor do novo salário.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 31/08/202

alert("******PROGRAMA REAJUSTE DO SALARIO*******");

salarioMensal = parseFloat(prompt("DIGITE O SALARIO DO SEU FUNCIONARIO: "));
percentualSalario = parseFloat(prompt("DIGITE O PERCENTUAL DE REAJUSTE: "));
valorFinalSalario = (salarioMensal * percentualSalario) / 100;

alert("O VALOR FINAL POS REAJUSTE E DE: " + parseFloat(valorFinalSalario + salarioMensal));
