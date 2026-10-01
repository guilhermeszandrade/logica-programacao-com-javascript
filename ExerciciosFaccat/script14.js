// Disciplina   : [Lógica de Programação com Java Script]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler um valor e escrever a mensagem é maior que 10! se o valor lido for maior que 10, caso contrario  escrever  NÂO E MAIOR QUE 10@ (função)
// Autor(a)    : Guilhereme Souza Andrade
// Data atual  : 31/08/2026


alert("PROGRAMA MAIOR QUE 10");
valor = parseInt(prompt("DIGITE UM VALOR: "));
if (valor > 10) {
  alert("O VALOR DIGITADO E MAIOR QUE 10");
} else if (valor == 10) {
  alert("O VALOR DIGITADO E IGUAL A 10");
} else {
  alert("O VALOR DIGITADO E MENOR QUE 10");
}
