let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 20;

let criaMosquitoTempo = 1500;

let nivel = window.location.search;
nivel.replace('?', '');

if(nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500;
} else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000;
} else if(nivel === 'chucknorris') {
    //1500
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

let cronometro = setInterval(function() {

    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000);

function posicaoRandomica() {
    //remover o mosquito anterior (caso exista)
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        //console.log('Elemento selecionado foi: v' + vidas);
        if(vidas > 3){
            
            window.location.href = 'fim_de_jogo.html';
        }

        document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
        vidas++
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    let mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';
    mosca.id = 'mosquito';
    mosca.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosca);

}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);

    if(classe == 0) {
        return 'mosca1';

    } else if(classe == 1) {
        return 'mosca2';

    } else{
        return 'mosca3';
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);

    if(classe == 0) {
        return 'ladoA';

    } else {
        return 'ladoB';
    }
}