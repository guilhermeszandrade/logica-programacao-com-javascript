// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo que leia as idades de 2 homens
// e de 2 mulheres (considere que as idades dos homens serão sempre
// diferentes entre si, bem como as das mulheres). Calcule e escreva
// a soma das idades do homem mais velho com a mulher mais nova,
// e o produto das idades do homem mais novo com a mulher mais velha. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function calcularIdades() {
    let idadeHomem01 = parseInt(prompt("Digite a idade do primeiro homem: "))
    let idadeHomem02 = parseInt(prompt("Digite a idade do segundo homem: "))
    let idadeMulher01 = parseInt(prompt("Digite a idade da primeira mulher: "))
    let idadeMulher02 = parseInt(prompt("Digite a idade da segunda mulher: "))

    if (idadeHomem01 > idadeHomem02) {
        homemMaisVelho = idadeHomem01
        homemMaisNovo = idadeHomem02
    } else {
        homemMaisVelho = idadeHomem02
        homemMaisNovo = idadeHomem01
    }
    
    if (idadeMulher01 > idadeMulher02) {
        mulherMaisVelha = idadeMulher01
        mulherMaisNova = idadeMulher02
    } else {
        mulherMaisVelha = idadeMulher02
        mulherMaisNova = idadeMulher01
    }      

    let somaIdades = homemMaisVelho + mulherMaisNova
    let produtoIdades = homemMaisNovo * mulherMaisVelha 

    alert(`Soma das idades do homem mais velho com a mulher mais nova: ${somaIdades}`)
    alert(`Produto das idades do homem mais novo com a mulher mais velha: ${produtoIdades}`)
}

calcularIdades()


