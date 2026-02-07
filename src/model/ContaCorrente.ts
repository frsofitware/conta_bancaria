import { Colors } from "../util/Colors"
import { Conta } from "./Conta"

export class ContaCorrente extends Conta{

    private _limite: number;

	constructor(
        numero: number, 
        agencia: number, 
        titular: string, 
        tipo: number, 
        saldo: number,
        limite: number) {

        super(numero, agencia, titular, tipo, saldo);    
		this._limite = limite;
	}


    /**
     * Getter limite
     * @return {number}
     */
	public get limite(): number {
		return this._limite;
	}

    /**
     * Setter limite
     * @param {number} value
     */
	public set limite(value: number) {
		this._limite = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Limite da Conta: R$ ${this._limite.toFixed(2)}`);
    }

    public sacar(valor: number): boolean {
    
        if(valor <= 0){
            console.log(Colors.fg.red, 
                "O valor deve ser positivo.", 
                Colors.reset);
        return false;
        }
    
        if(valor > (this.saldo + this._limite)){
            console.log(Colors.fg.red, 
                "Saldo Insuficiente!", 
                Colors.reset
            );
            
        return false;
        }

        this.saldo -= valor;
        return true;
    }
}