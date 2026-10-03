// Disciplina   : [Lógica de Programação com JavaScript]
// Professor   : Jailson Costa dos Santos
// Descrição   : Faça um algoritmo para ler um número que é um código
// de usuário. Caso este código seja diferente de um código armazenado
// internamente no algoritmo (igual a 1234) deve ser apresentada a
// mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser
// lido outro valor que é a senha. Se esta senha estiver incorreta
// (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’.
// Caso a senha esteja correta, deve ser mostrada a mensagem
//‘Acesso permitido’. (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 3/10/2026

function verificarAcesso() {
    const codigoUsuario = 1234
    const senhaUsuario = 9999
    let codigo = parseInt(prompt("Digite o código de usuário: "))

    if (codigo !== codigoUsuario) {
        alert("Usuário inválido!");
    } else {
        let senha = parseInt(prompt("Digite a senha: "))
        if (senha !== senhaUsuario) {
            alert("senha incorreta");
        } else {
            alert("Acesso permitido");
        }
    }
}
verificarAcesso()
