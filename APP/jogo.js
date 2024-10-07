let altura = 0;
let largura = 0;

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();


function posicaoRandomica() {
    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //criar o elemento html
    let mosca = document.createElement('img');
    mosca.src = 'imagens/mosca.png';
    mosca.className = tamanhoAleatorio();
    mosca.style.left = posicaoX + 'px';
    mosca.style.top = posicaoY + 'px';
    mosca.style.position = 'absolute';

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