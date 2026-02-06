import leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {
    let opcao: number

    // TESTES DE USO

   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, "Mariana", 1, 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, "Victor", 2, 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {
        console.log(colors.bg.black, colors.fg.magentastrong, `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║       ██████╗  █████╗ ███╗   ██╗ ██████╗  ██████╗         ║
║       ██╔══██╗██╔══██╗████╗  ██║██╔════╝ ██╔═══██╗        ║
║       ██████╔╝███████║██╔██╗ ██║██║      ██║   ██║        ║
║       ██╔══██╗██╔══██║██║╚██╗██║██║      ██║   ██║        ║
║       ██████╔╝██║  ██║██║ ╚████║╚██████╗ ╚██████╔╝        ║
║       ╚══  BRAZIL COM Z - O BANCO DO FUTURO  ═══╝         ║
║      ---------------------------------------------        ║
║                                                           ║
║    [1] ➜ Criar Nova Conta      [6] ➜ Sacar Dinheiro       ║
║    [2] ➜ Listar Contas         [7] ➜ Efetuar Depósito     ║
║    [3] ➜ Buscar por Número     [8] ➜ Transferência        ║
║    [4] ➜ Atualizar Dados       [9] ➜ Sair do Sistema      ║
║    [5] ➜ Encerrar Conta                                   ║
║                                                           ║
║      ---------------------------------------------        ║
╚═══════════════════════════════════════════════════════════╝
`, colors.reset)

        console.log(" Entre com a opção desejada:                               ")
        opcao = leia.questionInt(" >> ")

        if (opcao === 9) {
            console.log(colors.fg.cyanstrong, "\n      Banco do Brasil com Z - O seu futuro começa aqui!        ")
            sobre()
            console.log(colors.reset, "")
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.magentastrong, "\n\nCriar Conta\n\n", colors.reset)
                keyPress()
                break
            
            case 2:
                console.log(colors.fg.magentastrong, "\n\nListar todas as Contas\n\n", colors.reset)
                keyPress()
                break
            
            case 3:
                console.log(colors.fg.magentastrong, "\n\nConsultar dados da Conta - por número\n\n", colors.reset)
                keyPress()
                break

            case 4:
                console.log(colors.fg.magentastrong, "\n\nAtualizar dados da conta\n\n", colors.reset)
                keyPress()
                break
                
            case 5:
                console.log(colors.fg.magentastrong, "\n\nApagar uma conta\n\n", colors.reset)
                keyPress()
                break

            case 6:
                console.log(colors.fg.magentastrong, "\n\nSaque\n\n", colors.reset)
                keyPress()
                break

            case 7:
                console.log(colors.fg.magentastrong, "\n\nDepósito\n\n", colors.reset)
                keyPress()
                break
                
            case 8:
                console.log(colors.fg.magentastrong, "\n\nTransferência entre Contas\n\n", colors.reset)
                keyPress()
                break

            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset)
                keyPress()
                break
        }
    }
}

export function sobre(): void {
    console.log(colors.fg.magentastrong, `
╔═══════════════════════════════════════════════════════════╗
║      ---------------------------------------------        ║
║   Projeto desenvolvido por: Sofia                         ║
║   Generation Brasil - generation@generation.org           ║
║   github.com/conteudo/Generation                          ║
║      ---------------------------------------------        ║
╚═══════════════════════════════════════════════════════════╝`, colors.reset)
}

function keyPress(): void {
    console.log(colors.reset, "")
    console.log("\nPressione enter para continuar...")
    leia.prompt()
}

main()