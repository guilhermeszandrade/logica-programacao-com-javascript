// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler um valor e escrever se é positivo,
// negativo ou zero (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function verificarValor() {
    let valor = parseFloat(prompt("Digite um valor: "))
    if (valor > 0) {
        alert("O valor é positivo.")
    }   
    else if (valor < 0) {
        alert("O valor é negativo.")
    } 
    else {
        alert("O valor é igual a zero.")
    }   
}
verificarValor()
