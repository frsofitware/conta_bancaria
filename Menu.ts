import leia from "readline-sync"

export function main() {

    let opcao: number

    while (true) {
        console.log(`
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
╚═══════════════════════════════════════════════════════════╝`)
        
console.log("║ Entre com a opção desejada:                               ║")
opcao = leia.questionInt(" >> ")

if (opcao === 9) {
    console.log("\n║  Banco do Brasil com Z - O seu futuro começa aqui!        ║")
    sobre()
    process.exit(0)
}

switch (opcao) {
    
    case 1:
    console.log("\n\nCriar Conta\n\n")
    break
    
    case 2:
    console.log("\n\nListar todas as Contas\n\n")
    break
    
    case 3:
    console.log("\n\nConsultar dados da Conta - por número\n\n")
    break

    case 4:
        console.log("\n\nAtualizar dados da conta\n\n")
        break
        
    case 5:
        console.log("\n\nApagar uma conta\n\n")
        break

    case 6:
        console.log("\n\nSaque\n\n")
        break

    case 7:
        console.log("\n\nDepósito\n\n")
        break
        
    case 8:
        console.log("\n\nTransferência entre Contas\n\n")
        break

    default:
        console.log("\nOpção Inválida!\n")
        break
        }
    }
}

export function sobre(): void {
    console.log("╔═══════════════════════════════════════════════════════════╗")
    console.log("║      ---------------------------------------------        ║")
    console.log("║   Projeto desenvolvido por: Sofia                         ║")
    console.log("║   Generation Brasil - generation@generation.org           ║")
    console.log("║   github.com/conteudo/Generation                          ║")
    console.log("║      ---------------------------------------------        ║")
    console.log("╚═══════════════════════════════════════════════════════════╝")
}

main()