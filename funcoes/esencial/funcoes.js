// Escreva uma função que receba um nome e retorne uma saudação para este nome: Tiago -> Olá, Tiago
function saudar( nome ) {
    return `Olá, ${nome}`;
}
const nome = 'Alex Lima';
saudar(nome);
// Escreva uma função que receba um nome completo e retorna apenas o primeiro nome: Tiago Lage Payne de Pádua -> Tiago
function extrairPrimeiroNome(nomeCompleto) {
    return nomeCompleto.split(' ')[0];
}
const nomeCompleto = 'Alex Lima';
const y = extrairPrimeiroNome(nomeCompleto);

// Escreva uma função que receba uma palavra e torna a primeira letra maiúscula e as outras minúsculas: tIaGo -> Tiago
function capitalizar(nome) {
    return nome.split(" ").map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.substr(1).toLowerCase();
    }).join(' ');
}
const capitaliza = capitalizar(nome);
console.log(capitaliza);

// Escreva uma função que recebe um preço original e uma categoria de produto e calcula o valor do imposto. Produtos da categoria Alimentação são isentos. Outros produtos tem um imposto de 10%.
// (30, Alimentação) => 0
// (10, Bebida) => 1
function calculaImposto(preco, categoria) {
    return categoria.includes("Alimentação") ? 0 : ((preco * 10) /100);
}
const preco = 10;
const categoria = 'Bebida';
const calImposto = calculaImposto(preco, categoria);
console.log(calImposto);

// Escreva uma função que recebe um preço original, uma categoria de produto e um cupom de desconto e calcula o preço com desconto. Se a categoria for Alimentação e o cupom for NULABSSA, deve ser feito um desconto de 50%. Caso contrário, não há nenhum desconto.
// (30, Alimentação, NULABSSA) => 15
// (10, Bebida, NULABSSA) => 10
// (30, Alimentação, XPTO) => 30
// (10, Bebida, XPTO) => 10
function calculaDesconto() { }