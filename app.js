let listaDeNumerosSorteados = []; // Criando uma lista vazia
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); //Guardando o valor aleatório em uma variável
let tentativas = 1;

// Função com parâmetro, mas não retorna algo
function mudarTexto(tag, texto){
    corpo = document.querySelector(tag);
    corpo.innerHTML = texto;
};

exibirMensagemInicial();

// Função sem parâmetro que não retorna algo
function verificarChute(){
    let chute = document.querySelector('input').value; // Pega o valor que é colocado dentro de um input 
    if (chute == numeroSecreto){
        mudarTexto('h1', 'Ganhou!!!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        mudarTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecreto){
            mudarTexto('p', 'O número secreto é menor.');
        } else{
            mudarTexto('p', 'O número secreto é maior.')
        }
        tentativas++;

        limparCampo();
    }
};

// Função sem parâmetro que retorna um valor
function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1); // Colocando valor aleatório gerado dentro de uma variável

    if (listaDeNumerosSorteados.length == numeroLimite){
        listaDeNumerosSorteados = []; // Esvaziando a lista caso ela já tenha sorteado todos os números possíveis.
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); // Recursividade
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); // Adicionando número aleatório na lista de listaDeNumerosSorteados
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
    
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    mudarTexto('h1', 'Jogo do número secreto');
    mudarTexto('p', `Escolha um número entre 1 e ${numeroLimite}`);
}