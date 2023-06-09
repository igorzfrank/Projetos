musicas = [
    { 
        nome: "Vem Me Buscar",
        local: "./music/music-01.mp3",
        img: "./image/capa-01.png"
    }, 
    { 
        nome: "Só Penso em Você",
        local: "./music/music-02.mp3",
        img: "./image/capa-02.png"
    }, 
    { 
        nome: "Longe de Casa",
        local: "./music/music-03.mp3",
        img: "./image/capa-03.png"
    }, 
    { 
        nome: "Faltava Você",
        local: "./music/music-04.mp3",
        img: "./image/capa-04.png"
    }
]

const audio = document.querySelector('.audio');
const source = document.querySelector('.audioSoure');
const img = document.querySelector('.img');
const timeRange = document.querySelector('.timeRange');
const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const displayCurrentTime = document.querySelector('.currentTime');
const displayFullTime = document.querySelector('.fullTime');

let index = 0;

displayFullTime.textContent = time(audio.duration);

playBtn.addEventListener('click', function() {
    audio.play();
    playBtn.classList.add('off');
    pauseBtn.classList.remove('off');
    setTimeout(changeMax, 500);
});

pauseBtn.addEventListener('click', function() {
    audio.pause();
    pauseBtn.classList.add('off');
    playBtn.classList.remove('off');
});

nextBtn.addEventListener('click', function(){
    index += 1;
    if (index > musicas.length - 1) {
        index = 0;
    }
    img.src = `${musicas[index].img}`;
    audio.src = `${musicas[index].local}`;
    setTimeout(changeMax, 10);
    audio.play();
    displayFullTime.textContent = time(audio.duration);
})

prevBtn.addEventListener('click', function(){
    index -= 1;
    if (index < 0) {
        index = musicas.length - 1;
    };
    img.src = `${musicas[index].img}`;
    audio.src = `${musicas[index].local}`;
    setTimeout(changeMax, 10);
    audio.play();
});

timeRange.addEventListener('change', function(){
    audio.currentTime = timeRange.value
})

setInterval(duration, 1000);

function duration(){
    timeRange.value = audio.currentTime;
    displayCurrentTime.textContent = time(audio.currentTime);
};

function changeMax(){
    timeRange.max = audio.duration;
    displayFullTime.textContent = time(audio.duration);
};

function time(duration) {
    let min = Math.floor(duration / 60)
    if (min < 10) {
        min = '0' + min;
    }
    let sec = Math.floor(duration % 60)
    if (sec < 10) {
        sec = '0' + sec;
    } 
    return `${min}:${sec}`;
}

console.log(audio.duration)

