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

