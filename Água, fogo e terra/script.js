const playerChoice = document.querySelectorAll(".player-choice");
const computerChoice = document.querySelectorAll(".computer-choice");
const btn = document.querySelector(".btn-jogar");
const backResult = document.querySelector(".result-container");
const textResult = document.querySelector(".text-result");

var escolha;

playerChoice.forEach(function(player) {
    player.addEventListener('click', function(e){
       
        playerChoice.forEach(function(item){
            if(item !== playerChoice) {
                item.classList.remove('is-active');
            }
        })
        e.target.classList.add('is-active');

        return escolha = e.currentTarget.id;
    })
})

btn.addEventListener('click', function(){
    let computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
        computer = "water"
    } else if (computer == 1) {
        computer = "fire"
    } else {
        computer = "earth"
    }

    computerChoice.forEach(function(comp){
        if(computer == comp.id) {
            comp.classList.add('is-active');
        } else {
            comp.classList.remove('is-active');
        }
    })

    if (escolha == "water" && computer == "fire") {
        playerWin();
    } else if (escolha == "water" && computer == "earth") {
        computerWin()
    } else if (escolha == "fire" && computer == "earth") {
        playerWin();
    } else if (escolha == "fire" && computer == "water") {
        computerWin()
    } else if (escolha == "earth" && computer == "water") {
        playerWin();
    } else if (escolha == "earth" && computer == "fire") {
        computerWin()
    } else {
        backResult.style.background = "#5d8bdf";
        textResult.innerHTML = "DRAW";
    }
})

function playerWin(){
    backResult.style.background = "#26b626";
    textResult.innerHTML = "Player WIN";
}

function computerWin(){
    backResult.style.background = "#b62626";
    textResult.innerHTML = "Computer WIN";
}