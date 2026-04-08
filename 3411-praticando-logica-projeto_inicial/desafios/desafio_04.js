function anoBissexto(){
    let ano = Number(prompt("Escreva seu ano: "));

    if(ano % 4 === 0){
        alert("Seu ano é bissexto!");
    } else {
        alert("Seu ano não é bissexto!");
    }
}