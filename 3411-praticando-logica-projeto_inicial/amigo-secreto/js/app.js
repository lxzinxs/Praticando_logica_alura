//array amigos
let amigos = [];

function adicionar() {
    //nomear variaveis
    let nomesAmigos = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomesAmigos.value)

    //adicionar nomes
    if(listaAmigos.textContent == "") {
        listaAmigos.textContent = nomesAmigos.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ", " + nomesAmigos.value;
    }

    //limpar campo depois de colocar o nome
    nomesAmigos.value = "";
}

function sortear() {
    misturar(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

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