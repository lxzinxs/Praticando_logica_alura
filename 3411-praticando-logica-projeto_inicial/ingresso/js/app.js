function comprar() {
    //nomear variaveis
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    let totalPista = 0;
    let totalSuperior = 0;
    let totalInferior = 0;

    //remover do carrinho - subtrair valores
    if(tipo.value == 'pista') {
        if(quantidade > quantidadePista || quantidade < 1) {
            alert("quantidade inválida");
            return;
        } else {
        totalPista = quantidadePista - quantidade;
        quantidadePista.textContent = totalPista;
        document.getElementById('qtd-pista').textContent = totalPista;
        alert("compra efetuada com sucesso");
        }

    } else if (tipo.value == 'superior') {
        if(quantidade > quantidadeSuperior || quantidade < 1) {
            alert("quantidade inválida");
            return;
        } else {
            totalSuperior = quantidadeSuperior - quantidade;
            quantidadeSuperior.textContent = totalSuperior;
            document.getElementById('qtd-superior').textContent = totalSuperior;
            alert("compra efetuada com sucesso");
        }
    } else if (tipo.value == 'inferior') {
        if(quantidade > quantidadeInferior || quantidade < 1) {
            alert("quantidade inválida");
            return;
        } else {
            totalInferior = quantidadeInferior - quantidade;
            quantidadeInferior.textContent = totalInferior;
            document.getElementById('qtd-inferior').textContent = totalInferior;
            alert("compra efetuada com sucesso");
        }
    }

}