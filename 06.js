//Faça um algoritimo que receba um numero N, depois peça N notas de prova para o usuario, o programa deve calcular a media das provas e mostrar quais notas ficaram abaixo da media da turma
const lista = [], fm = []
let total, media = 0

total = parseInt(prompt("Digite o total de alunos na classe"))
for( let i = 0; i < total; i++){
    lista.push(parseFloat(prompt("Nota;")))
}
for(let i = 0; i < lista.length; i++){
    media += lista[i]
}
media /= total
for (let i = 0; i < lista.length; i++) {
    if( lista[i] < media){
        fm.push(lista[i])
    }
}
console.log("A média é;", media, "E as notas abaixo da média foram:", fm)