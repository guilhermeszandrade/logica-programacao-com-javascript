// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costas dos Santos
// Descrição   : Ler dois valores (considere que não serão lidos
// valores iguais) e escrever o maior deles.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 9/13/2026

valor1 = parseFloat(prompt("DIGITE UM VALOR: "))
valor2 = parseFloat(prompt("DIGITE UM SEGUNDO VALOR: "))

if (valor1 > valor2) {
    alert("O MAIOR NUMERO E: " + valor1)
} else {
    alert("O MAIOR NUMERO E: " + valor2)
    
}