// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo que leia o número de litros
// vendidos e o tipo de combustível (codificado da seguinte forma:
// A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo
// cliente sabendo-se que o preço do litro da gasolina é R$ 3,30
// e o preço do litro do álcool é R$ 2,90.
// até 20 litros, desconto de 3% por litro Álcool acima de 20 litros,
// desconto de 5% por litro.
// até 20 litros, desconto de 4% por litro Gasolina acima de 20 litros,
// desconto de 6% por litro   (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function calcularValor() {
    let litros = parseFloat(prompt("Digite a quantidade de litros vendidos: "))
    let tipoCombustivel = prompt("Digite o tipo de combustível (A-álcool, G-gasolina): ").toUpperCase()

    let precoPorLitro
    let desconto

    if (tipoCombustivel === "A") {
        precoPorLitro = 2.90
        desconto = litros <= 20 ? 0.03 : 0.05
    }
    else if (tipoCombustivel === "G") {
        precoPorLitro = 3.30
        desconto = litros <= 20 ? 0.04 : 0.06
    }
    else {
        alert("Tipo de combustível inválido.")
        return 
    }
    
    let valorTotal = litros * precoPorLitro
    let valorDesconto = valorTotal * desconto
    let valorFinal = valorTotal - valorDesconto

    alert(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`)
}
calcularValor()