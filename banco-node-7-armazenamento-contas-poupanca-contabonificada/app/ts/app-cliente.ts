let clienteController = new ClienteController();
clienteController.listar();

const cl3 = new Cliente('Maria','123.902.423-56',new Conta('3', 100));

const cl4 = new Cliente('José','183.982.823-29',new Conta('4', 100));

const cl5 = new Cliente('Hyu','143.912.123-53',new Conta('5', 100));

let clientezts = new Clientes();
clientezts.inserir(cl3);
clientezts.inserir(cl4);
clientezts.inserir(cl5);

console.log(clientezts.listar());
clientezts.remover('143.912.123-53');
console.log(clientezts.listar());

console.log(clientezts.pesquisar('123.902.423-56').nome);