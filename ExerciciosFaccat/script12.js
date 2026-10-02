// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Escreva um algoritmo para ler uma temperatura em
// graus Fahrenheit, calcular e escrever o valor correspondente em
// graus Celsius (baseado na fórmula abaixo) (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 1/10/2026

function temperaturaGrausFahrenheit () {
let grausFahrenheit = parseFloat(prompt("Informe a temperatura em graus Fahrenheit: "))
let grausCelsius = (grausFahrenheit - 32) * 5/9
return grausCelsius

}
alert("A temperatura Fahrenheit convertida para celsius é: "+ temperaturaGrausFahrenheit().toFixed(2))