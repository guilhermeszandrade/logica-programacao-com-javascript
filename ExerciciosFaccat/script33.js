// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function compararNumeros() {
    let valor01 = parseFloat(prompt("Digite o primeiro valor: "))
    let valor02 = parseFloat(prompt("Digite o segundo valor: "))

    if (valor01 === valor02) {
        alert("Números iguais")
    } else if (valor01 > valor02) {
        alert("Primeiro é maior" + valor01.toFixed(2))
    } else {
        alert("Segundo é maior" + valor02.toFixed(2))
    }   
}
compararNumeros()