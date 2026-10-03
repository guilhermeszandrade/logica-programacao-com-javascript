// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : As maçãs custam R$ 1,30 cada se forem compradas menos
// de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12.
// Escreva um programa que leia o número de maçãs compradas,
// calcule e escreva o custo total da compra (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 13/9/2026

let qtdMacas = parseInt(prompt("DIGITE A QUANTIDADE DE MAÇÃS: "));
if (qtdMacas < 12) {
  valorFinal = qtdMacas * 1.3;
} else {
  valorFinal = qtdMacas * 1;
}
alert("A QUANTIDADE DE MAÇÃS É: " + qtdMacas);
alert("O VALOR DAS MAÇÃS É: " + valorFinal.toFixed(2));
