//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function mudarTexto(tag, texto){
    corpo = document.querySelector(tag);
    corpo.innerHTML = texto;
}

mudarTexto('h1', 'Jogo do número secreto');
mudarTexto('p', 'Escolha um número entre 1 e 10')

function verificarChute(){
    console.log('Botão foi clicado')
}