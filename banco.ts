//Crie um programa de banco com registro de conta, login, registro de transações
//O registro deve pegar o nome, cpf e senha
//Login deve pedir cpf e senha
//Usuario pode ver seu saldo, registrar transações de entrada e de saida e deslogar

type Transacao = {
    valor: number;
    tipo: string;
    para: string;
};

type Cliente = {
    nome: string;
    cpf: string;
    senha: string;
    saldo: number;
};

function registrar() {
    const user: Cliente = { nome: "", cpf: "", senha: "", saldo: 0 };
    user.nome = prompt("Nome completo; ")!;
    user.cpf = prompt("CPF;")!;
    user.senha = prompt("Faça sua senha;")!;
    usuarios.push(user);
}

function logar() {
    console.log("Dê as informaçôes de Login");
    const cpf = prompt("CPF; ")!;
    const senha = prompt("Senha; ")!;
    if (cpf === usuarios[0].cpf && senha === usuarios[0].senha) {
        uselog = usuarios[0];
    } else {
        console.log("Informações erradas");
    }
}

function transferir() {
    const transferencia: Transacao = { valor: 0, tipo: "", para: "" };
    transferencia.valor = parseFloat(
        prompt("Digite o valor da transferência; ")!,
    );
    transferencia.tipo = prompt(
        "Transferência é de entrada ou saída; ",
    )!;
    transferencia.para = prompt(
        "Nome da pessoa ou instituição envolvida na transferência; ",
    )!;
    if (transferencia.tipo === "entrada") {
        usuarios[0].saldo += transferencia.valor;
        transferencias.push(transferencia);
    } else if (transferencia.tipo === "saida") {
        usuarios[0].saldo -= transferencia.valor;
        transferencias.push(transferencia);
    } else {
        console.log("Tranferência inválida, selecione um tipo correto.");
    }
}

const usuarios: Cliente[] = [];
const transferencias: Transacao[] = [];
let uselog: Cliente | undefined = undefined;

console.log("Banco B, 1 registrar, 2 login");

while (true) {
    if (uselog === undefined) {
        const açao = prompt("-");
        if (açao === "1") {
            registrar();
        } else if (açao === "2") {
            logar();
        } else {
            console.log("Acesso negado. Faça login");
        }
    } else {
        console.log(
            "Bem vindo ao menu de usario, 1 para ver seu saldo e gerenciar transações, 2 para deslogar",
        );
        const açao = prompt("-");
        if (açao === "1") {
            console.log("Seu saldo é: ", usuarios[0].saldo);
            transferir();
        } else if (açao === "2") {
            uselog = undefined;
        } else {
            console.log("Comando Inválido");
        }
    }
}
