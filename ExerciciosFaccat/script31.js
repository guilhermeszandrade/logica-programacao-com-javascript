// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler 3 valores (A, B e C) representando as medidas
// dos lados de um triângulo e escrever se formam ou não um triângulo.
// OBS: para formar um triângulo, o valor de cada lado deve ser menor
// que a soma dos outros 2 lados. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function verificarTriangulo() {
    let valorA = parseFloat(prompt("Digite o valor do lado A: "))
    let valorB = parseFloat(prompt("Digite o valor do lado B: "))
    let valorC = parseFloat(prompt("Digite o valor do lado C: "))

    if (valorA < valorB + valorC && valorB < valorA + valorC && valorC < valorA + valorB) {
        alert("Os valores informados formam um triângulo.")
    } else {
        alert("Os valores informados não formam um triângulo.")
    }   
}
verificarTriangulo()