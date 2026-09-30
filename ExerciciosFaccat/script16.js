let qtdMacas = parseInt(prompt("DIGITE A QUANTIDADE DE MAÇÃS: "));
if (qtdMacas < 12) {
  valorFinal = qtdMacas * 1.3;
} else {
  valorFinal = qtdMacas * 1;
}
alert("A QUANTIDADE DE MAÇÃS É: " + qtdMacas);
alert("O VALOR DAS MAÇÃS É: " + valorFinal.toFixed(2));
