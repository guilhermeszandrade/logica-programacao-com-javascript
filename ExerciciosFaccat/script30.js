// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler 3 valores (considere que não serão informados
// valores iguais) e escrevê-los em ordem crescente.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function ordenarValores() {
    let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor02 = parseFloat(prompt("Digite o segundo valor: "))
    let valor03 = parseFloat(prompt("Digite o terceiro valor: "))

    if (valor01 < valor02 && valor01 < valor03) {
        if (valor02 < valor03) {
            alert("Os valores em ordem crescente são: " + valor01 + ", " + valor02 + ", " + valor03)
        } else {
            alert("Os valores em ordem crescente são: " + valor01 + ", " + valor03 + ", " + valor02)
        }
    } else if (valor02 < valor01 && valor02 < valor03) {
        if (valor01 < valor03) {
            alert("Os valores em ordem crescente são: " + valor02 + ", " + valor01 + ", " + valor03)
        } else {
            alert("Os valores em ordem crescente são: " + valor02 + ", " + valor03 + ", " + valor01)
        }
    } else {
        if (valor01 < valor02) {
            alert("Os valores em ordem crescente são: " + valor03 + ", " + valor01 + ", " + valor02)
        } else {
            alert("Os valores em ordem crescente são: " + valor03 + ", " + valor02 + ", " + valor01)
        }
    }
}
ordenarValores()