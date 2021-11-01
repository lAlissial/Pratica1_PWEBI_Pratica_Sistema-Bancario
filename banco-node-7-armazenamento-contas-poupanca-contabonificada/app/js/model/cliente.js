class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nomez) {
        this._nome = nomez;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpfz) {
        this._cpf = cpfz;
    }
    get conta() {
        return this._conta;
    }
    set conta(contaz) {
        this._conta = contaz;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta.numero}
        - Saldo: ${this._conta.saldo}`;
    }
}
