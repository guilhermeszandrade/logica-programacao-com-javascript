// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Faça um algoritmo que leia três notas de um aluno,
// calcule e escreva a média final deste aluno.Considerar que a
// média é ponderada e que o peso das notas é 2, 3 e 5.
// Fórmula para o cálculo da média final é: ! (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function mediaFinalAluno() {
  let nota01 = parseFloat(prompt("Informe a primeira nota do aluno: "));
  let nota02 = parseFloat(prompt("Informe a segunda nota do aluno: "));
  let nota03 = parseFloat(prompt("Informe a terceira nota do aluno: "));
  let mediaFinal = nota01 * 2 + nota02 * 3 + (nota03 * 5) / 10;
  return mediaFinal;
}
alert("A media final é " + mediaFinalAluno().toFixed(2));
