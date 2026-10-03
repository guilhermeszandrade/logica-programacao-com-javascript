// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler 3 valores (considere que não serão informados
// valores iguais) e escrever o maior deles.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function verificarMaiorValor() {
    let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor02 = parseFloat(prompt("Digite o segundo valor: "))
    let valor03 = parseFloat(prompt("Digite o terceiro valor: "))

    if (valor01 > valor02 && valor01 > valor03) {
        alert("O maior valor é: " + valor01)
    } else if (valor02 > valor01 && valor02 > valor03) {
        alert("O maior valor é: " + valor02)
    } else {
        alert("O maior valor é: " + valor03)
}
}
verificarMaiorValor()