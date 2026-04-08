//array amigos
let amigos = [];

function adicionar(){
    //nomear variaveis
    let nomesAmigos = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    let nomeOriginal = nomesAmigos.value.trim();
    let nomeComparacao = nomeOriginal.toLowerCase();

    //impedir nome vazio
    if(nomeOriginal == ''){
        alert("Coloque o nome de uma pessoa!");
        return;
    }

    //impedir nome igual - ignorando maiúsculas e minúsculas
    if(amigos.some(x => x.toLowerCase() === nomeComparacao)){
       alert("Nome ja adicionado!"); 
       return;
    }

    
    amigos.push(nomeOriginal);

    //adicionar nomes
    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = nomeOriginal;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomeOriginal;
    }

    //limpar campo depois de colocar o nome
    nomesAmigos.value = "";
}

function sortear() {
    //sorteio com mais de 4 pessoas
    if(amigos .length < 4){
        alert("Adicione pelo menos 4 amigos!");
        return;
    }

    misturar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    //limpar sortear
    listaSorteio.innerHTML = "";

    //repeticao para sortear
    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[0] + '<br>'
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + '<br>'
        }
    }
}

//misturar as arrays
function misturar(listaAmigos) {
    for(let a = listaAmigos.length; a; a--){
        const aleatorio = Math.floor(Math.random() * a);

        [listaAmigos[a - 1], listaAmigos[aleatorio]] =
            [listaAmigos[aleatorio], listaAmigos[a - 1]];
    }
}

//reiniciar o sorteio
function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
}