// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Se o cliente comprar mais de 8 Kg em frutas ou o
//  valor total da compra ultrapassar R$ 25,00, receberá ainda um
// desconto de 10% sobre este total. Escreva um algoritmo para ler
// a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças
// adquiridas e escreva o valor a ser pago pelo cliente.  (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function calcularValorCompra() {
    let valorMorango = 2.50
    let valorMaca = 1.80
    let quantidadeMorango = parseFloat(prompt("Digite a quantidade de morangos (em Kg): "))
    let quantidadeMaca = parseFloat(prompt("Digite a quantidade de maçãs (em Kg): "))

    if (quantidadeMorango <= 5) {
        valorMorango = quantidadeMorango * 2.50
    } else {
        valorMorango = quantidadeMorango * 2.20
    }
    
    if (quantidadeMaca <= 5) {
        valorMaca = quantidadeMaca * 1.80
    } else {
        valorMaca = quantidadeMaca * 1.50
    }  

    let totalCompra 

    if  (quantidadeMorango + quantidadeMaca > 8 || (valorMorango + valorMaca) > 25) {
        totalCompra = (valorMorango + valorMaca) * 0.90
    } else {   
        totalCompra = valorMorango + valorMaca
    }

    alert(`O valor total a ser pago pelo cliente é: R$ ${totalCompra.toFixed(2)}`)
}

calcularValorCompra()