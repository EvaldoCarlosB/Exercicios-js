const alunos = [], fm = []
let media = 0

const total = prompt("Quantidade de alunos avaliados;")
for(let i = 0; i < total; i++){
    const aluno = {}
    aluno.nome = prompt("Nome do(a) aluno(a) " + (i + 1))
    aluno.nota = parseFloat(prompt("Nota do(a) aluno(a) " + (i + 1)))
    alunos.push(aluno)
}
for(let i = 0; i < alunos.length; i++){
    media += alunos[i].nota
}
media /= total
for (let i = 0; i < alunos.length; i++) {
    if( alunos[i].nota < media){
        fm.push(alunos[i].nome)
    }
}
console.log("Alunos fora da média são:", fm)