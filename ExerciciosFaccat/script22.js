// Descrição   : A jornada de trabalho semanal de um funcionário é de
// 40 horas. O funcionário que trabalhar mais de 40 horas receberá
// hora extra, cujo cálculo é o valor da hora regular com um acréscimo
// de 50%. Escreva um algoritmo que leia o número de horas trabalhadas
// em um mês, o salário por hora e escreva o salário total do
// funcionário, que deverá ser acrescido das horas extras, caso
//tenham sido trabalhadas (considere que o mês possua 4 semanas exatas). (função)
// Autor(a)    : Guilherme Souza Andrade
// Data atual  : 9/14/2026

let horasTrabalhadas = parseInt(prompt("Digite as horas trabalhadas: "));
let salarioHora = parseInt(prompt("Digite o salario (por hora): "));

if (horasTrabalhadas <= 180) {
  salarioFinal = horasTrabalhadas * salarioHora;
} else {
  horasExtras = horasTrabalhadas - 160;
  valorHoraExtra = (horasExtras * 50) / 100 + salarioHora;
  salarioFinal = 160 * salarioHora + horasExtras * valorHoraExtra;
}
alert("O SALARIO DO TRABALHDOR É: R$" + salarioFinal.toFixed(2));
