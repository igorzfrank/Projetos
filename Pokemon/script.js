const bulbasaur = [
    {
        id: 0,
        title: "bulbasaur",
        img: "imagens/001.png",
    },
    {
        id: 1,
        title: "ivysaur",
        img: "imagens/002.png",
    },
    {
        id: 2,
        title: "venosaur",
        img: "imagens/003.png",
    },
];

const charmander = [
    {
        id: 0,
        title: "charmander",
        img: "imagens/004.png",
    },
    {
        id: 1,
        title: "charmeleon",
        img: "imagens/005.png",
    },
    {
        id: 2,
        title: "charizard",
        img: "imagens/006.png",
    },
];

const squirtle = [
    {
        id: 0,
        title: "squirtle",
        img: "imagens/007.png",
    },
    {
        id: 1,
        title: "wartotle",
        img: "imagens/008.png",
    },
    {
        id: 2,
        title: "blastoise",
        img: "imagens/009.png",
    },
];

const pokemonImagem = [...document.querySelectorAll(".pokemon-img")];
const pokemonSelect = document.querySelector(".pokemon-select");
const navBar = document.querySelector(".nav-bar");
const btnSlider = [...document.querySelectorAll(".btn")];
const pokemonName = document.querySelector("#pokemon-name");

let pokemonSelecionado = bulbasaur

let currentItem = 0

window.addEventListener('DOMContentLoaded', ()=>{
    showPokemon();
});

function showPokemon(){
    if (pokemonSelecionado == bulbasaur){
        const item = bulbasaur[currentItem]
        pokemonSelect.src = item.img
        pokemonName.textContent = item.title
    } else if (pokemonSelecionado == charmander) {
        const item = charmander[currentItem]
        pokemonSelect.src = item.img
        pokemonName.textContent = item.title
    } else {
        const item = squirtle[currentItem]
        pokemonSelect.src = item.img
        pokemonName.textContent = item.title
    }
}

pokemonImagem.map((el)=>{
    el.addEventListener("click",(event)=>{
        const pokemonClick = event.target
        if (pokemonClick.classList.contains("bulbasaur")){
            navBar.style.background = "#6dc48e"
            pokemonName.style.color = "#6dc48e"
            console.log(pokemonSelecionado)
            pokemonSelecionado = bulbasaur
        } else if (pokemonClick.classList.contains("charmander")) {
            navBar.style.background = "#ffac5f"
            pokemonName.style.color = "#ffac5f"
            console.log(pokemonSelecionado)
            pokemonSelecionado = charmander
        } else {
            navBar.style.background = "#6aa1d1"
            pokemonName.style.color = "#6aa1d1"
            console.log(pokemonSelecionado)
            pokemonSelecionado = squirtle
        }
        currentItem = 0;
        showPokemon();
    })
})

btnSlider.map((el)=>{
    el.addEventListener("click",(event)=>{
        if(event.target.classList.contains("right")){
            currentItem += 1;
            if(currentItem > 2){
                currentItem = 0;
            }
        } else {
            currentItem -= 1;
            if (currentItem < 0){
                currentItem = 2;
            }
        }
        showPokemon();
    })
})

