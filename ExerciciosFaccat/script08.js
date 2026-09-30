/*
1 Entrada
2 Processamento
3 Saída 
*/

alert("******PROGRAMA ELEITORES******");

let eleitores = parseInt(
  prompt("DIGITE A QUANTIDADE DE ELEITORES DO MUNICÍPIO: "));
let brancos = parseInt(prompt("VOTOS BRANCOS: "));
let nulos = parseInt(prompt("VOTOS NULOS: "));
let validos = parseInt(prompt("VOTOS VALIDOS: "));

let pbrancos = (brancos / eleitores) * 100;

let pnulos = (nulos / eleitores) * 100;

let pvalidos = (validos / eleitores) * 100;

alert("Votos Brancos: " + pbrancos.toFixed(2) + "%");
alert("Votos Nulos:   " + pnulos.toFixed(2) + "%");
alert("Votos Válidos: " + pvalidos.toFixed(2) + "%");
