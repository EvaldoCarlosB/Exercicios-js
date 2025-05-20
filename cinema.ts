function print(input: string | Uint8Array, to = Deno.stdout) {
    let bytesWritten = 0;
    const bytes = typeof input === "string"
        ? new TextEncoder().encode(input)
        : input;
    while (bytesWritten < bytes.length) {
        bytesWritten += to.writeSync(bytes.subarray(bytesWritten));
    }
}

function listar() {
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 4; j++) {
            const posiçao = (i - 1) * 3 + j;
            if (cinema[posiçao].ocupado === false) {
                print(posiçao.toString());
            } else {
                print("-");
            }
            print("\t");
        }
        console.log("");
    }
    console.log("");
}

function preencher() {
    for (let i = 0; i < 31; i++) {
        const lugares: Assento = { nome: "", ocupado: false };
        cinema.push(lugares);
    }
}

type Assento = {
    nome: string;
    ocupado: boolean;
};
let lucro = 0;
const cinema: Assento[] = [];
preencher();
console.log(
    "Bem Vindo ao CineFilme, digite 1 para comprar um ingresso, 2 para iniciar o processo de reembolso e 3 para ver o lucro esperado da noite (somente funcionários com senha)",
);
while (true) {
    const açao = prompt("Apresentando Hoje 'XXX'");
    if (açao === "1") {
        console.log("Assentos; ");
        listar();
        const escolha = parseInt(
            prompt("Qual assento deseja comprar? (1 a 30)")!,
        );
        if (escolha > 30 || escolha <= 0 || cinema[escolha].ocupado === true) {
            console.log("Assento Inválido, por favor escolha outro.");
        } else {
            cinema[escolha].nome = prompt("Escreva seu nome;")!;
            cinema[escolha].ocupado = true;
            lucro += 1;
        }
    } else if (açao === "2") {
        console.log("Digite seu nome e o número do assento a ser reembolsado");
        const nomeconfirm = prompt("Nome;");
        const poltrona = parseInt(prompt("Número do assento;")!);
        if (
            cinema[poltrona].nome !== nomeconfirm ||
            cinema[poltrona].ocupado === false
        ) {
            console.log(
                "informações não compativeis, procure um funcionário presencialmente",
            );
        } else {
            cinema[poltrona].nome = "";
            cinema[poltrona].ocupado = false;
            lucro -= 1;
        }
    } else if (açao === "3") {
        const senha = 12345;
        const senhauser = parseInt(
            prompt("Digite a senha do sistema de funcionários")!,
        );
        if (senha === senhauser) {
            console.log("O lucro esperado para essa noite é de; ", lucro * 20);
        }
    }
}
