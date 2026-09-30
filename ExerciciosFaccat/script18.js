//18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
//poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

anonascimento = parseFloat(prompt("DIGITE O ANO EM QUE VOCÊ NASCEU: "))
anoAtual = parseInt(prompt("DIGITE O ANO ATUAL: "))
idade = anoAtual - anonascimento
alert("SUA IDADE ATUAL E: " + idade)


if (idade >= 18){
    alert("VOCÊ PODE VOTAR")

}else{
    alert("VOCÊ NÃO PODE VOTAR")
}