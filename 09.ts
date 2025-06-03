//Faça um programa de contatos, deve ter um menu com opção de adicionar e listar contatos, contatos contem nome e numero
type Contato = {
    nome: string;
    numero: string;
};
function listar() {
    for (let i = 0; i < contatos.length; i++) {
        console.log(i + 1, ": ", contatos[i].nome, " - ", contatos[i].numero);
    }
}
const contatos: Contato[] = [];
console.log(
    "Bem Vindo a Lista de Contatos, digite CONTATOS para ver seus contatos atuais, ADICIONAR para adicionar um novo ou SAIR para fechar",
);
while (true) {
    const açao = prompt("comando:");
    if (açao === "CONTATOS") {
        listar();
    } else if (açao === "ADICIONAR") {
        const contato: Contato = { nome: "", numero: "" };
        contato.nome = prompt("Nome Completo;")!;
        contato.numero = prompt("Número;")!;
        contatos.push(contato);
    } else if (açao === "SAIR") {
        break;
    } else if (açao === "DELETAR") {
        listar();
        const posiçao = parseInt(
            prompt("Digite a posição do contato a ser deletado;")!,
        );
        if (posiçao > contatos.length || posiçao <= 0) {
            console.log("Contato Inválido");
        } else {
            contatos.splice(posiçao - 1, 1);
        }
    } else {
        console.log("Comando não reconhecido.");
    }
}
