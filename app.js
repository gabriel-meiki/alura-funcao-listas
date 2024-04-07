let numeroSecreto = gerarNumeroAleatorio(); //Guardando o valor aleatório em uma variável

// Função com parâmetro, mas não retorna algo
function mudarTexto(tag, texto){
    corpo = document.querySelector(tag);
    corpo.innerHTML = texto;
};

mudarTexto('h1', 'Jogo do número secreto');
mudarTexto('p', 'Escolha um número entre 1 e 10')

// Função sem parâmetro que não retorna algo
function verificarChute(){
    console.log(numeroSecreto)
};

// Função sem parâmetro que retorna um valor
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
};