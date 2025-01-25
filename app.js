
var amigos = [];

function exibirNaTela(tag, texto){

var campo = document.querySelector(tag);
    campo.innerHTML =(texto)
}

function adicionarAmigo(){
    var preencher =  document.querySelector('input').value.trim()
    limparNome();

    if( preencher == ""){
        window.alert("[ERRO] Por favor preencha um nome abaixo!")
    }else{
        amigos.push(preencher);
        var nome = "";
        var i= 0;
        while(i < amigos.length){
            nome += `<li>${amigos[i]}</li>`;
            i++;
           
        }
        exibirNaTela('ul' ,`${nome}`);
       
    }

}

function sortearAmigo(){
    var friends = amigos.length;
    var sorteio = Math.floor(Math.random()* friends)

    if(amigos < 1) {
        window.alert('Adicione no minimo 2 nomes')
    } else {
        exibirNaTela('ul' ,` Amigo secreto é ${amigos[sorteio]}`)
        amigos.splice(sorteio, 1); 
    }
    

}


function limparNome(){
    preencher = document.querySelector('input')
    preencher.value = "";
}
