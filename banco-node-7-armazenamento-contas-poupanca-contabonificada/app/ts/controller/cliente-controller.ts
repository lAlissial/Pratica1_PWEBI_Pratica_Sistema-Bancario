class ClienteController{
    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputNumero: HTMLInputElement;
    private inputSaldo: HTMLInputElement;
    private clienteszt: Clientes;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome")
        this.inputCPF = <HTMLInputElement>document.querySelector("#cpf");
        this.inputNumero = <HTMLInputElement>document.querySelector("#numerocli")
        this.inputSaldo= <HTMLInputElement>document.querySelector("#saldocli");
        this.clienteszt = new Clientes();
    }

    inserir(evento: Event) {
        if (this.clienteszt.pesquisar(this.inputCPF.value)){
            evento.preventDefault();
            alert("CPF em uso");
        } else {
            evento.preventDefault();
            let novoCliente = new Cliente(this.inputNome.value, this.inputCPF.value, new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
            this.clienteszt.inserir(novoCliente);
            this.inserirClienteNoHTML(novoCliente);
        }
    }

    listar() {
        this.clienteszt.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clienteszt.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}