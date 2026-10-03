// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Para o enunciado a seguir foi elaborado um algoritmo
// em Português Estruturado que contém erros, identifique os erros
// no algoritmo apresentado abaixo: (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 10/2/2026


function generoPeso () {
    let genero = prompt("Digite seu gênero: (M) para masculino ou (F) para feminino").toUpperCase()
    let altura = parseFloat(prompt("Digite sua altura: "))

    if (genero === "M") {
        let pesoIdeal = (72.7 * altura) - 58
        return pesoIdeal
    } else if (genero === "F") {
        let pesoIdeal = (62.1 * altura) - 44.7
        return pesoIdeal
    }
}
alert("SEU PESO IDEAL É: " + generoPeso().toFixed(2) + " KG")