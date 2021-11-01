class Cliente {
    private _nome: string;
    private _cpf: string;
    private _conta:Conta;

    constructor(nome: string, cpf:string, conta:Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome():string {
        return this._nome;
    }

    set nome(nomez) {
        this._nome = nomez;
    }

    get cpf():string  {
        return this._cpf;
    }

    set cpf(cpfz)  {
        this._cpf = cpfz;
    }

    get conta():Conta {
        return this._conta;
    }

    set conta(contaz) {
        this._conta = contaz;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.numero}
        - Saldo: ${this._conta.saldo}`;
    }


}