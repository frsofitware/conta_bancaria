import { Colors } from "../util/Colors";

export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _titular: string;
    private _tipo: number;
    private _saldo: number;


	constructor(numero: number, agencia: number, titular: string, tipo: number, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._titular = titular;
		this._tipo = tipo;
		this._saldo = saldo;
	}

    /**
     * Getter numero
     * @return {number}
     */
	public get numero(): number {
		return this._numero;
	}

    /**
     * Getter agencia
     * @return {number}
     */
	public get agencia(): number {
		return this._agencia;
	}

    /**
     * Getter titular
     * @return {string}
     */
	public get titular(): string {
		return this._titular;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter saldo
     * @return {number}
     */
	public get saldo(): number {
		return this._saldo;
	}

    /**
     * Setter numero
     * @param {number} value
     */
	public set numero(value: number) {
		this._numero = value;
	}

    /**
     * Setter agencia
     * @param {number} value
     */
	public set agencia(value: number) {
		this._agencia = value;
	}

    /**
     * Setter titular
     * @param {string} value
     */
	public set titular(value: string) {
		this._titular = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter saldo
     * @param {number} value
     */
	public set saldo(value: number) {
		this._saldo = value;
	}


     // Métodos Auxiliares

    public sacar(valor: number): boolean {

        if(valor <= 0){
                console.log(Colors.fg.red, "O valor deve ser positivo.", Colors.reset);
                return false;
        }

        if(this._saldo < valor){
            console.log(Colors.fg.red, "Saldo Insuficiente!", Colors.reset);
            return false;
        }
        
        this._saldo -= valor;
        return true;
     }

    public depositar(valor: number): void{
        
        if(valor <= 0)
           console.log(Colors.fg.red, "O valor deve ser positivo.", Colors.reset);
            
        else {
             this._saldo += valor;
        }        
    }

    public visualizar(): void{

        let tipo: string ="";

        switch(this._tipo){

            case 1:
                tipo = "Conta Corrente";
            break

            case 2:
                tipo = "Conta Poupança";
            break

            default:
                tipo = "Tipo Inválido.";

        }

        console.log("\n***************************************");
        console.log("             DADOS DA CONTA              ");
        console.log("***************************************\n");
        console.log(`Número da Conta: ${this._numero}`);
        console.log(`Agência: ${this._agencia}`);
        console.log(`Titular: ${this._titular}`);
        console.log(`Tipo da Conta: ${tipo}`);
        console.log(`Saldo:  R$ ${this._saldo.toFixed(2)}`);
    }   
}