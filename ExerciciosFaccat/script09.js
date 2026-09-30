alert("******PROGRAMA REAJUSTE DO SALARIO*******");

salarioMensal = parseFloat(prompt("DIGITE O SALARIO DO SEU FUNCIONARIO: "));
percentualSalario = parseFloat(prompt("DIGITE O PERCENTUAL DE REAJUSTE: "));
valorFinalSalario = (salarioMensal * percentualSalario) / 100;

alert("O VALOR FINAL POS REAJUSTE E DE: " + parseFloat(valorFinalSalario + salarioMensal));
