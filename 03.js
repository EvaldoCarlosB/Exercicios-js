// Faça um algoritmo que peça a idade de uma pessoa expressa em anos, meses e dias e escreva a idade somente em dias. Considerar ano com 365 dias e mês com 30 dias.
const ano = 365, mes = 30, dia = 24
let iddano, iddmes, idddia, totaldias, totalsegundos
console.log("Digite sua idade completa separando em anos, meses e dias")
iddano = parseInt(prompt("Ano(s)"))
iddmes = parseInt(prompt("Mes(es)"))
idddia = parseInt(prompt("Dia(s)"))

totaldias = (iddano * ano) + (iddmes * mes) + idddia
totalsegundos = totaldias * 86400
console.log("Sua idade total em dias é:", totaldias, "e em segundos é:", totalsegundos)