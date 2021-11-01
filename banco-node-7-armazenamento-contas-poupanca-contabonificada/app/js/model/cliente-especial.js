class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta, dependendes) {
        super(nome, cpf, conta);
        this.listaDependentes = [];
        this.listaDependentes = dependendes;
    }
    inserirDependente(dependente) {
        this.listaDependentes.push(dependente);
    }
    listarDependentes() {
        return this.listarDependentes();
    }
    pesquisarDependente(cpfzit) {
        return this.listaDependentes.find(cliente => cliente.cpf === cpfzit);
    }
    removerDependente(cpfzito) {
        const dependenteARemover = this.pesquisarDependente(cpfzito);
        if (dependenteARemover) {
            const indiceDependente = this.listaDependentes.indexOf(dependenteARemover);
            if (indiceDependente > -1) {
                this.listaDependentes.splice(indiceDependente, 1);
            }
        }
    }
}
