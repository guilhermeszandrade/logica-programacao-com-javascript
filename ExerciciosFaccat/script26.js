// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler: quantidade atual em
// estoque, quantidade máxima em estoque e quantidade mínima em
// estoque de um produto. Calcular e escrever a quantidade média
// ((quantidade média = quantidade máxima + quantidade mínima)/2).
// Se a quantidade em estoque for maior ou igual a quantidade média
// escrever a mensagem 'Não efetuar compra', senão escrever a mensagem
// 'Efetuar compra'.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function verificarEstoque() {
    let quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque: "))
    let quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque: "))
    let quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque: "))
    let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2
    if (quantidadeAtual >= quantidadeMedia) {
        alert("Não efetuar compra. Quantidade atual em estoque")
    } else {
        alert("Efetuar compra. Quantidade atual em estoque")
    } 
}
verificarEstoque()