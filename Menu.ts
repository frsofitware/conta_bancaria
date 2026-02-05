import leia from "readline-sync"
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta"

export function main() {
    let opcao: number

    // TESTES DE USO

    const c1 = new Conta(1, 1234, "Sofia", 1, 1000000.00);
    
    c1.visualizar();
    c1.sacar(10500);
    c1.visualizar();
    c1.depositar(5000);
    c1.visualizar();

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