let total = 0;
limpar();

function adicionar() {
    //nomear variaveis
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let campoTotal = document.getElementById('valor-total');
    let carrinho = document.getElementById('lista-produtos');

    //quantidade < 0
    if(quantidade <= 0) {
        alert("Escreva um valor válido");
        return limpar();
    }

    //calcular o preco, o nosso subtotal
    let preco = valorUnitario * quantidade;

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">$R${preco}</span>
        </section>`;

    //atualizar o valor total  
    total = total + preco;
    campoTotal.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 1;
}

function limpar() {
    document.getElementById('lista-produtos').innerText = "Sem produtos no carrinho";
    document.getElementById('valor-total').innerHTML = "R$ 0";
    document.getElementById('quantidade').value = 1;
}



//Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores digitados nos campos usando a propriedade value. 
//Exiba os valores no console e na tela.

//Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar seu conteúdo usando a propriedade textContent.

//Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em Template String.

//Receba, 
//no mínimo,
//duas sentenças como uma string e utilize split() para quebrá-la em frases menores com base em um ponto e vírgula como delimitador.

//Receba uma string contendo números separados por vírgulas. 
//Utilize split() para separar os números e exibi-los no console.
