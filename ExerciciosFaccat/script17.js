//17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
//uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
//aluno é aprovado). Escrever também a média calculada.

nota01 = parseInt(prompt("DIGITE A PRIMEIRA NOTA DO ALUNO: "));
nota02 = parseInt(prompt("DIGITE A PRIMEIRA NOTA DO ALUNO: "));

mediafinal = (nota01 + nota02) / 2;
alert("A MEDIA FINAL FOI: " + mediafinal.toFixed(2));

if (mediafinal >= 6) {
  alert("A O ALUNO PASSOU DE ANO ");
} else {
  alert("O ALUNO REPROVOU O ANO");
}
