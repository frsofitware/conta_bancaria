import leia from "readline-sync"
import { Colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
import { Input } from "./src/util/Input";
import { formatarMoeda } from "./src/util/Currency";


const contas = new ContaController();

const tipoContas = ['Conta Corrente', 'Conta Poupança'];


export function main() {
   
    let opcao: number

    criarContasTeste ();

    while (true) {
        console.log(Colors.bg.black, Colors.fg.magentastrong, `
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
`, Colors.reset)

        console.log(" Entre com a opção desejada:                               ")
        opcao = leia.questionInt(" >> ")

        if (opcao === 9) {
            console.log(Colors.fg.cyanstrong, "\n      Banco do Brasil com Z - O seu futuro começa aqui!        ")
            sobre()
            console.log(Colors.reset, "")
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.magentastrong, "\n\nCriar Conta\n\n", Colors.reset)
                  criarConta();
                keyPress()
                break
            
            case 2:
                console.log(Colors.fg.magentastrong, "\n\nListar todas as Contas\n\n", Colors.reset)
                listarTodasContas();
                keyPress()
                break
            
            case 3:
                console.log(Colors.fg.magentastrong, "\n\nConsultar dados da Conta - por número\n\n", Colors.reset)
                buscarContaPorNumero();
                keyPress()
                break

            case 4:
                console.log(Colors.fg.magentastrong, "\n\nAtualizar dados da conta\n\n", Colors.reset)
                atualizarConta();
                keyPress();
                break
                
            case 5:
                console.log(Colors.fg.magentastrong, "\n\nApagar uma conta\n\n", Colors.reset)
                deletarContaPorNumero();
                keyPress()
                break

            case 6:
                console.log(Colors.fg.magentastrong, "\n\nSaque\n\n", Colors.reset)
                keyPress()
                break

            case 7:
                console.log(Colors.fg.magentastrong, "\n\nDepósito\n\n", Colors.reset)
                keyPress()
                break
                
            case 8:
                console.log(Colors.fg.magentastrong, "\n\nTransferência entre Contas\n\n", Colors.reset)
                keyPress()
                break

            default:
                console.log(Colors.fg.red, "\nOpção Inválida!\n", Colors.reset)
                keyPress()
                break
        }
    }
}

// Opção 1: Criar uma nova conta.

function criarConta(){
    console.log("Digite o número da agência: ");
    const agencia = Input.questionInt("");
    
    console.log("Digite o nome do titular: ");
    const titular = Input.question("");

    console.log("Selecione o tipo da conta: ");
    const tipo = Input.keyInSelect(tipoContas, "", {cancel:false}) + 1;

    console.log("Digite o saldo da conta: ");
    const saldo = Input.questionFloat("");


    switch(tipo){
        case 1:
            console.log("Digite o limite da conta: ");
            const limite = Input.questionFloat("");
            contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, titular, tipo, saldo, limite));

        break

        case 2:
            console.log("Digite o dia do aniversário da conta: ");
            const aniversario = Input.questionInt("");
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, titular, tipo, saldo, aniversario));

        break
    }
}

function listarTodasContas(): void {
    contas.listarTodas();
}

function buscarContaPorNumero(): void {

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");

    contas.procurarPorNumero(numero);
}

function deletarContaPorNumero(): void {

    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");
    
    const conta = contas.buscarNoArray(numero);
    
    if(conta !== null){
        console.log(Colors.fg.whitestrong, `\nTem certeza que deseja deletar a conta número ${numero} [Y/N]?, Colors.reset`)
        const confirma = Input.keyInYNStrict("");

        if (confirma)
            contas.deletar(numero);

        else
            console.log(Colors.fg.red, "\nOperação cancelada!", Colors.reset);

    } else {
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada!`, Colors.reset)
    }
}

function atualizarConta(): void {
    
    console.log("Digite o número da conta: ");
    const numero = Input.questionInt("");

    const conta = contas.buscarNoArray(numero);

    if(conta !== null){

        let agencia: number = conta.agencia;
        let titular: string = conta.titular;
        const tipo: number = conta.tipo;
        let saldo: number = conta.saldo;

        console.log(`\nAgencia Atual: ${agencia}`);
        console.log("\nDigite o número da nova Agência:\n(Pressione ENTER para manter o valor atual)");
        agencia = Input.questionInt("", { defaultInput: agencia });
      
        console.log(`\nNome atual do Titular ${titular}`);
        console.log("\nDigite o novo nome do Titular:\n(Pressione ENTER para manter o valor atual)");
        titular = Input.question("", { defaultInput: titular })

        console.log(`\nSaldo Atual: ${formatarMoeda(saldo)}`);
        console.log("\nDigite o valor do novo Saldo:\n(Pressione ENTER para manter o valor atual)");
        saldo = Input.questionFloat("", { defaultInput: saldo });

        switch(tipo){
        
            case 1:{
            let limite: number = (conta as ContaCorrente).limite;

            console.log(`\nLimite Atual: ${limite}`);
            console.log(`Digite o valor do Novo Limite:\n(Pressione ENTER para manter o valor)`);
            limite = Input.questionFloat("", { defaultInput: limite })

            contas.atualizar(new ContaCorrente(numero, agencia, titular, tipo, saldo, limite));

        break
        }

        case 2:
            let aniversario: number = (conta as ContaPoupanca).aniversario;

            console.log(`\nAgencia Atual: ${aniversario}`);
            console.log(`Digite o novo valor do Aniversário:\n(Pressione ENTER para manter o valor)`)
            aniversario = Input.questionInt("", { defaultInput: aniversario });

            contas.atualizar(new ContaPoupanca(numero, agencia, titular, tipo, saldo, aniversario));
            

        break
    }


    } else {
        console.log(Colors.fg.red, `A conta número ${numero} não foi encontrada.`,  Colors.reset)
    }

}

export function sobre(): void {
    console.log(Colors.fg.magentastrong, `
╔═══════════════════════════════════════════════════════════╗
║      ---------------------------------------------        ║
║   Projeto desenvolvido por: Sofia                         ║
║   Generation Brasil - generation@generation.org           ║
║   github.com/conteudo/Generation                          ║
║      ---------------------------------------------        ║
╚═══════════════════════════════════════════════════════════╝`, Colors.reset)
}

function keyPress(): void {
    console.log(Colors.reset, "")
    console.log("\nPressione enter para continuar...")
    leia.prompt()
}

function criarContasTeste(): void{
   
    // Instâncias da Classe ContaCorrente
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 1234, 'Amanda Magro', 1, 1000000.00, 100000.00));
    contas.cadastrar(new ContaCorrente(contas.gerarNumero(), 4578, 'João da Silva', 1,  1000.00, 100.00));
 
    // Instâncias da Classe ContaPoupança
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5789, "Geana Almeida", 2, 10000, 10));
    contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), 5698, "Jean Lima", 2, 15000, 15));
 
}
main()