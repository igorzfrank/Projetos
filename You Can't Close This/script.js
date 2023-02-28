const frases = [
    'Feche essa janela!', 'Errou!' , 'Ainda não' , 'Tá dificil em', 'Você quer ajuda?', 'Vai lá, mais um vez', 'Você consegue', 'Não desiste!', 'Eu esperava mais...' , 'Vamos lá!', 'Go, go, go!'
]
const popUp = document.querySelector('.pop-up');
const btnClose = document.querySelector('#btn-close');
const text = document.querySelector('.pop-up-text');

btnClose.addEventListener('click', function(){
    let i = Math.floor(Math.random() * frases.length)
    let x = 10 + Math.floor(Math.random() * 80);
    let y = 10 + Math.floor(Math.random() * 80);

    text.innerText = frases[i];

    popUp.style.top = `${y}%`;
    popUp.style.left = `${x}%`;
})