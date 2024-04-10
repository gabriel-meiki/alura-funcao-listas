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
    let chute = document.querySelector('input').value; // Pega o valor que é colocado dentro de um input 
    if (chute == numeroSecreto){
        mudarTexto('h1', 'Ganhou!!!!');
        mudarTexto('p', 'Você acertou o número aleatório!');
    } else {
        if (chute > numeroSecreto){
            mudarTexto('p', 'O número secreto é menor.');
        } else{
            mudarTexto('p', 'O número secreto é maior.')
        }
    }
};

// Função sem parâmetro que retorna um valor
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
};