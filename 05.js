//O sonho custa 4 reais, mas comprando 3 juntos sai por 10 reais
//Faça um algoritimo que leia a quantidade de sonhos sendo vendidos e escreva o preço total
//2 sonhos -> 8 reais; 3 sonhos -> 10 reais; 4 sonhos -> 14 reais
let totalPreco, totalPedido, pedido, semPromocao

totalPedido = parseInt(prompt("Digite quantos sonhos deseja comprar;"))
semPromocao = totalPedido%3
pedido = Math.floor(totalPedido / 3)
totalPreco = pedido * 10 + semPromocao * 4

console.log("O valor da sua compra é R$", totalPreco)