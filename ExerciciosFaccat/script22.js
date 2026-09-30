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
