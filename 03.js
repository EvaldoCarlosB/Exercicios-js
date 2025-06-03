// Faça um algoritmo que peça a idade de uma pessoa expressa em anos, meses e dias e escreva a idade somente em dias. Considerar ano com 365 dias e mês com 30 dias.
const ano = 365, mes = 30, dia = 24
let idadeAno, idadeMes, idadeDia, totalDias, totalSegundos
console.log("Digite sua idade completa separando em anos, meses e dias")
idadeAno = parseInt(prompt("Ano(s)"))
idadeMes = parseInt(prompt("Mes(es)"))
idadeDia = parseInt(prompt("Dia(s)"))

totalDias = (idadeAno * ano) + (idadeMes * mes) + idadeDia
totalSegundos = totalDias * 86400
console.log("Sua idade total em dias é:", totalDias, "e em segundos é:", totalSegundos)