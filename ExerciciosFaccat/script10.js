// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : O custo de um carro novo ao consumidor é a soma do
// custo de fábrica com a porcentagem do distribuidor e dos impostos
// (aplicados ao custo de fábrica). Supondo que o percentual do
// distribuidor seja de 28% e os impostos de 45%, escrever
// um algoritmo para ler o custo de fábrica de um carro, calcular
// e escrever o custo final ao consumidor.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 2/10/2026

function custoCarroNovo() {
    let custoDeFabrica = parseFloat(prompt("Informe o custo de fabrica do carro: "))
    let percentualDistribuidor = 0.28
    let percentualImpostos = 0.45
    return custoDeFabrica + (custoDeFabrica * percentualDistribuidor) + (custoDeFabrica * percentualImpostos)
}

alert("O custo final do carro ao consumidor é: " + custoCarroNovo().toFixed(2))