/*
1 Entrada
2 Processamento
3 Saída 
*/

// Disciplina   : [Lógica de Programação com Java Script]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler idade em anos, meses e dias, e escrever em dias.
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 31/08/2026

alert("******PROGRAMA IDADE******");

ano = parseInt(prompt("DIGITE A QUANTIDADE DE ANOS VIVIDOS: "));
mes = parseInt(prompt("DIGITE A QUANTIDADE DE MESES PASSADOS DO SEU ULTIMO ANIVERSARIO: "));
dia = parseInt(prompt("DIGITE A QUANTIDADE DE DIAS PASSADOS DO SEU ULTIMO MESVERSARIO: "));

totalDias = ano * 365 + mes * 30 + dia;
alert("A SUA IDADE TOTAL EM DIAS É: " + totalDias + " dias");
