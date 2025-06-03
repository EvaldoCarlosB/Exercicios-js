const listaAlunos = [], foraMedia = [], alunos = []
let total, media = 0

total = parseInt(prompt("Digite o total de alunos na classe"))
for(let i = 0; i < total; i++){
    alunos.push(prompt("Aluno " + i))
}
for( let i = 0; i < total; i++){
    listaAlunos.push(parseFloat(prompt("Nota;")))
}
for(let i = 0; i < listaAlunos.length; i++){
    media += listaAlunos[i]
}
media /= total
for (let i = 0; i < listaAlunos.length; i++) {
    if( listaAlunos[i] < media){
        foraMedia.push(alunos[i])
    }
}
console.log("Alunos fora da média são:", foraMedia)