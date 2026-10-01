// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jalison Costa dos Santos
// Descrição   : Ler dois valores
//(considere que não serão lidos valores iguais)
//e escrevê-los em ordem crescente. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 9/13/2026

let valor1 = parseFloat(prompt("DIGITE UM VALOR: "));
let valor2 = parseFloat(prompt("DIGITE UM SEGUNDO VALOR: "));

if (valor1 > valor2) {
  alert("NUMERO: " + valor1 + " NUMERO: " + valor2);
} else {
  alert("NUMERO: " + valor2 + " NUMERO: " + valor1);
}
