// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Ler o nome de 2 times e o número de gols marcados
// na partida (para cada time). Escrever o nome do vencedor.
// Caso não haja vencedor deverá ser impressa a palavra EMPATE. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function verificarVencedor() {
    let time01 = prompt("Digite o nome do primeiro time: ")
    let gols01 = parseInt(prompt("Digite o número de gols do primeiro time: "))
    let time02 = prompt("Digite o nome do segundo time: ")
    let gols02 = parseInt(prompt("Digite o número de gols do segundo time: "))

    if (gols01 > gols02) {
        alert("O vencedor é: " + time01)
    } else if (gols02 > gols01) {
        alert("O vencedor é: " + time02)
    } else {
        alert("EMPATE")
    }
}
verificarVencedor()