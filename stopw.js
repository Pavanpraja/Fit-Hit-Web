const startingMinutes = 3;
let time = startingMinutes * 60;
var fhide = document.querySelector(".fhide");
var fhide1 = document.querySelector(".fhide1");
var fhide2 = document.querySelector(".fhide2");
var fhide3 = document.querySelector(".fhide3");
var fhide4 = document.querySelector(".fhide4");
var countdownEl = document.querySelector('.countdown');
var countdownEl1 = document.querySelector('.countdown1');
var countdownEl2 = document.querySelector('.countdown2');
var countdownEl3 = document.querySelector('.countdown3');
var countdownEl4 = document.querySelector('.countdown4');

function pause(){
    setInterval(updateCountdown, 1000);
    fhide.style.display = "none"; 
}
function pause1(){
    setInterval(updateCountdown1, 1000);
    fhide1.style.display = "none";
}
function pause2(){
    setInterval(updateCountdown2, 1000);
    fhide2.style.display = "none";
}
function pause3(){
    setInterval(updateCountdown3, 1000);
    fhide3.style.display = "none";
}
function pause4(){
    setInterval(updateCountdown4, 1000);
    fhide4.style.display = "none";
}

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown1(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl1.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown2(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl2.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown3(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl3.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown4(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl4.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}