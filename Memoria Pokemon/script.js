const pokemons = [
    {
        nome: 'bulbasaur',
        image: 'imagens/bulbasaur.png',
    },
    {
        nome: 'charmander',
        image: 'imagens/charmander.png',
    },
    {
        nome: 'squirtle',
        image: 'imagens/squirtle.png',
    },
    {
        nome: 'caterpie',
        image: 'imagens/caterpie.png',
    },
    {
        nome: 'weedle',
        image: 'imagens/weedle.png',
    },
    {
        nome: 'pidgey',
        image: 'imagens/pidgey.png',
    },
    {
        nome: 'ekans',
        image: 'imagens/ekans.png',
    },
    {
        nome: 'pikachu',
        image: 'imagens/pikachu.png',
    },
    {
        nome: 'vulpix',
        image: 'imagens/vulpix.png',
    },
    {
        nome: 'jigglypuff',
        image: 'imagens/jigglypuff.png',
    },
    {
        nome: 'meow',
        image: 'imagens/meow.png',
    },
    {
        nome: 'psyduck',
        image: 'imagens/psyduck.png',
    },
    {
        nome: 'growlithe',
        image: 'imagens/growlithe.png',
    },
    {
        nome: 'geodude',
        image: 'imagens/geodude.png',
    },
    {
        nome: 'koffing',
        image: 'imagens/koffing.png',
    },
    {
        nome: 'staryu',
        image: 'imagens/staryu.png',
    },
    {
        nome: 'magikarp',
        image: 'imagens/magikarp.png',
    },
    {
        nome: 'ditto',
        image: 'imagens/ditto.png',
    },
    {
        nome: 'bulbasaur',
        image: 'imagens/bulbasaur.png',
    },
    {
        nome: 'charmander',
        image: 'imagens/charmander.png',
    },
    {
        nome: 'squirtle',
        image: 'imagens/squirtle.png',
    },
    {
        nome: 'caterpie',
        image: 'imagens/caterpie.png',
    },
    {
        nome: 'weedle',
        image: 'imagens/weedle.png',
    },
    {
        nome: 'pidgey',
        image: 'imagens/pidgey.png',
    },
    {
        nome: 'ekans',
        image: 'imagens/ekans.png',
    },
    {
        nome: 'pikachu',
        image: 'imagens/pikachu.png',
    },
    {
        nome: 'vulpix',
        image: 'imagens/vulpix.png',
    },
    {
        nome: 'jigglypuff',
        image: 'imagens/jigglypuff.png',
    },
    {
        nome: 'meow',
        image: 'imagens/meow.png',
    },
    {
        nome: 'psyduck',
        image: 'imagens/psyduck.png',
    },
    {
        nome: 'growlithe',
        image: 'imagens/growlithe.png',
    },
    {
        nome: 'geodude',
        image: 'imagens/geodude.png',
    },
    {
        nome: 'koffing',
        image: 'imagens/koffing.png',
    },
    {
        nome: 'staryu',
        image: 'imagens/staryu.png',
    },
    {
        nome: 'magikarp',
        image: 'imagens/magikarp.png',
    },
    {
        nome: 'ditto',
        image: 'imagens/ditto.png',
    },
]

pokemons.sort(() => 0.5 - Math.random())

const pokeContainer = document.querySelector('.poke-container');

let playerChoice = [];
let playerChoiceId = [];

function pokeMemory() {
    console.log(pokemons)
    for ( i = 0; i < 36; i++) {
        let poke = document.createElement('img')
        poke.src = 'imagens/pokeball.png'
        poke.classList.add('poke-img')
        poke.setAttribute('data-id', i)
        poke.setAttribute('class', 'poke-img')
        pokeContainer.appendChild(poke)
        poke.addEventListener('click', flip);
    }
}

pokeMemory();

function flip(){
    let cardId = this.getAttribute('data-id');

    playerChoice.push(pokemons[cardId].nome);
    playerChoiceId.push(cardId);

    this.setAttribute('src', pokemons[cardId].image);

    if(playerChoice.length == 2) {
        setTimeout(pokeCheck, 200);
    }
    
    console.log(playerChoice)
}

function pokeCheck() {
    let img = document.querySelectorAll('.poke-img')

    if (playerChoice[0] == playerChoice[1]) {
        for ( i = 0; i < img.length; i++) {
            if (img[i].matches(`#${playerChoice[0]}`)){
                img[i].src = 'imagens/pokeballGreen.png';
                img[i].removeEventListener('click', flip);
            }
        }
        playerChoice = [];
        playerChoiceId = [];
    } else {
        img[playerChoiceId[0]].src = 'imagens/pokeballRed.png'
        img[playerChoiceId[1]].src = 'imagens/pokeballRed.png'
        pokeContainer.style.pointerEvents = 'none'
        setTimeout(function(){
            img[playerChoiceId[0]].src = 'imagens/pokeball.png'
            img[playerChoiceId[1]].src = 'imagens/pokeball.png'
            pokeContainer.style.pointerEvents = 'all'
            playerChoiceId = [];
        },500)
        playerChoice = [];
    }
}