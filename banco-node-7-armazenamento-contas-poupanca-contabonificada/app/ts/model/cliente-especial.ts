class ClienteEspecial extends Cliente{

    private listaDependentes:Array<Cliente> = [];


    constructor(nome: string, cpf: string, conta:Conta, dependendes:Array<Cliente>) {
        super(nome, cpf,conta);
        this.listaDependentes = dependendes;
    }

    inserirDependente(dependente:Cliente):void{
        this.listaDependentes.push(dependente);
    }

    listarDependentes(): Array<Cliente>{
        return this.listarDependentes();
    }

    pesquisarDependente(cpfzit:string):Cliente{
        return this.listaDependentes.find(cliente => cliente.cpf === cpfzit);
    }

    removerDependente(cpfzito:string):void{
        const dependenteARemover = this.pesquisarDependente(cpfzito);
        if (dependenteARemover) {
            const indiceDependente = this.listaDependentes.indexOf(dependenteARemover);
            if (indiceDependente > -1) {
                this.listaDependentes.splice(indiceDependente, 1);
            }
        }
    }
}