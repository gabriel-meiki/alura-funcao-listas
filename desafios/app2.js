let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole(){
    console.log('O botão foi clicado!');
};

function verificarAlerta(){
    alert('Eu amo JS.');
};

function verificarPrompt(){
    cidade = prompt('Diga o nome de uma cidade.');
    alert(`Estive em ${cidade} e lembrei de você.`);
};

function somar(){
    numero1 = parseInt(prompt('Digite um número.'));
    numero2 = parseInt(prompt('Digite outro número.'));
    soma = numero1 + numero2;
    alert(`A soma entre número o ${numero1} e o número ${numero2} vale ${soma}.`)
};