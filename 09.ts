//Faça um programa de contatos, deve ter um menu com opção de adicionar e listar contatos, contatos contem nome e numero
type Contato = {
    nome: string;
    numero: string;
};
function listar() {
    for (let i = 0; i < contato.length; i++) {
        console.log(i + 1, ": ", contato[i].nome, " - ", contato[i].numero);
    }
}
const contato: Contato[] = [];
console.log(
    "Bem Vindo a Lista de Contatos, digite CONTATOS para ver seus contatos atuais, ADICIONAR para adicionar um novo ou SAIR para fechar",
);
while (true) {
    const açao = prompt("comando:");
    if (açao === "CONTATOS") {
        listar();
    } else if (açao === "ADICIONAR") {
        const contatos: Contato = { nome: "", numero: "" };
        contatos.nome = prompt("Nome Completo;")!;
        contatos.numero = prompt("Número;")!;
        contato.push(contatos);
    } else if (açao === "SAIR") {
        break;
    } else if (açao === "DELETAR") {
        listar();
        const posiçao = parseInt(
            prompt("Digite a posição do contato a ser deletado;")!,
        );
        if (posiçao > contato.length || posiçao <= 0) {
            console.log("Contato Inválido");
        } else {
            contato.splice(posiçao - 1, 1);
        }
    } else {
        console.log("Comando não reconhecido.");
    }
}
