// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa
// Descrição   : Ler a hora de início e a hora de fim de um jogo de Xadrez
// (considere apenas horas inteiras, sem os minutos)
// e calcule a duração do jogo em horas, sabendo-se que
// o tempo máximo de duração do jogo é de 24 horas
// e que o jogo pode iniciar em um dia e terminar no dia seguinte. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 14/9/2026

function horaXadrez () {
    let horaInicio = parseInt(prompt("Informe a hora que o jogo de xadrez iniciou: "))
    let horaFinal = parseInt(prompt("Informe a hora em que o jogo de xadrez terminou: "))

    if (horaFinal > horaInicio){
        duracao = horaFinal - horaInicio
} else {
        duracao = (24 - horaInicio) + horaFinal 
        
}
        return duracao
}

alert("A duração da partida de xadrez foi de: " + horaXadrez()+ "hora(S)")