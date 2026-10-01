// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler um valor e escrever se é positivo ou negativo
// (considere o valor zero como positivo).  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 9/13/2026

valor = parseInt(prompt("Digite um numero e verei se é positivo ou negativo:"));

if (valor >= 0) {
  alert(`O seu numero: ${valor} é positivo!`);
} else {
  alert(`O seu numero: ${valor} é negativo!`);
}
