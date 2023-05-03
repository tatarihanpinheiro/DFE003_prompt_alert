

//exercício 1 - Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.

const numero = 2;
const dobro = numero * 2;
alert("O dobro de " + numero + " é " + dobro + ".");

//exercício 2 - Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

const valorConta1 = 400;
const taxaServico = 10;
const valorJantar = valorConta1 * (1 + taxaServico / 100);

alert("O valor do jantar é R$ " + valorJantar.toFixed(2) + ".");

//exercício 3 - Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

const valorConta = 1000;
const numClientes = 4;

const valorPorCliente = valorConta / numClientes;

alert(`Cada cliente deve pagar R$${valorPorCliente.toFixed(2)}.`);




