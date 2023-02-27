/* ==== Relogio ==== */

const rHours = document.getElementById('horas')
const rMinutes = document.getElementById('minutos')
const rSeconds = document.getElementById('segundos')

const relogio = setInterval( function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    rHours.textContent = hr;
    rMinutes.textContent = min;
    rSeconds.textContent = sec;
})

/* ==== Pomodo ==== */

let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')

let workTime = 25
let breakTime = 5

let seconds = "00"

var parado = true;

window.onload = function() {
    document.getElementById('d-minutos').textContent = workTime;
    document.getElementById('d-segundos').textContent = seconds;

    workTittle.classList.add('is-active')
}

function start() {

    parado = false;

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breackCount = 0

    let timerFunction = function() {

        if (parado == false) {
            document.getElementById('d-minutos').textContent = workMinutes;
            document.getElementById('d-segundos').textContent = seconds;
    
            seconds = seconds - 1;
    
            if (seconds == 0) {
                workMinutes = workMinutes -1
    
                if (workMinutes == -1) {
                    if (breackCount % 2 == 0) {
                        workMinutes = breakMinutes;
                        breakMinutes++;
    
                        workTittle.classList.remove('is-active');
                        breakTittle.classList.add('is-active');
                    } else {
                        workMinutes = workTime;
                        breackCount++;
    
                        workTittle.classList.add('is-active');
                        breakTittle.classList.remove('is-active');
                    }
                }
    
                seconds = 59;
            }
        } 

    }

    setInterval(timerFunction, 1000);
        

}

function reset() {
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";

    parado = true;

    workTime = 25
    breakTime = 5

}