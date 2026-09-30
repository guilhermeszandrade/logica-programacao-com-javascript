/*
1 Entrada
2 Processamento
3 Saída
*/
/* Disciplina   : [Lógica de Programação com JavaScript]
Professor   : Jailson Costa dos Santos
Descrição   : Escreva um algoritmo para ler um valor (do teclado)
e escrever (na tela) o seu antecessor.  (função)
Autor(a)    : Guilherme Souza Andrade
 Data atual  : 30/09/2026 */

function numeroAntecessor() {
  let numero01 = parseInt(prompt("Digite o primeiro valor: "));
  let antecessor = numero01 - 1;

  alert("O numero antecessor de " + numero01 + " é " + antecessor);
}
numeroAntecessor();
