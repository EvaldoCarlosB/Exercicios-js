const lista = [], fm = [], alunos = []
let total, media = 0

total = parseInt(prompt("Digite o total de alunos na classe"))
for(let i = 0; i < total; i++){
    alunos.push(prompt("Aluno " + i))
}
for( let i = 0; i < total; i++){
    lista.push(parseFloat(prompt("Nota;")))
}
for(let i = 0; i < lista.length; i++){
    media += lista[i]
}
media /= total
for (let i = 0; i < lista.length; i++) {
    if( lista[i] < media){
        fm.push(alunos[i])
    }
}
console.log("Alunos fora da média são:", fm)