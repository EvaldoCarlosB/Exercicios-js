//O sonho custa 4 reais, mas comprando 3 juntos sai por 10 reais
//Faça um algoritimo que leia a quantidade de sonhos sendo vendidos e escreva o preço total
//2 sonhos -> 8 reais; 3 sonhos -> 10 reais; 4 sonhos -> 14 reais
let totalpreço, totalpedido, pedido, np

totalpedido = parseInt(prompt("Digite quantos sonhos deseja comprar;"))
np = totalpedido%3
pedido = Math.floor(totalpedido / 3)
totalpreço = pedido * 10 + np * 4

console.log("O valor da sua compra é R$", totalpreço)