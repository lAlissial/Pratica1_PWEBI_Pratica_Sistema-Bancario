

class Clientes {
    private _clientes:Array<Cliente> = [];

    constructor() {
        this._clientes = new Array<Cliente>();
        const cli1 = new Cliente('Ana Vieira', '789.432.100-25',new Conta('1', 400));
        const cli2 = new Cliente('Jen Gomes', '200.349.163.50',new Conta('2', 300));
        this._clientes.push(cli1, cli2);
    }

    inserir(clientito:Cliente):void{
        this._clientes.push(clientito);
    }

    remover(cpfzito:string):void{
        const clienteARemover = this.pesquisar(cpfzito);
        if (clienteARemover) {
            const indiceCliente = this._clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }

    listar(): Array<Cliente>{
        return this._clientes;
    }

    pesquisar(cpfzit:string):Cliente{
        return this._clientes.find(cliente => cliente.cpf === cpfzit);
    }

}