const startingMinutes = 3;
let time = startingMinutes * 60;
var fhide = document.querySelector(".fhide");
var fhide1 = document.querySelector(".fhide1");
var fhide2 = document.querySelector(".fhide2");
var fhide3 = document.querySelector(".fhide3");
var fhide4 = document.querySelector(".fhide4");
var fhide5 = document.querySelector(".fhide5");
var fhide6 = document.querySelector(".fhide6");
var fhide7 = document.querySelector(".fhide7");
var countdownEl = document.querySelector('.countdown');
var countdownEl1 = document.querySelector('.countdown1');
var countdownEl2 = document.querySelector('.countdown2');
var countdownEl3 = document.querySelector('.countdown3');
var countdownEl4 = document.querySelector('.countdown4');
var countdownEl5 = document.querySelector('.countdown5');
var countdownEl6 = document.querySelector('.countdown6');
var countdownEl7 = document.querySelector('.countdown7');

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
function pause5(){
    setInterval(updateCountdown5, 1000);
    fhide5.style.display = "none";
}
function pause6(){
    setInterval(updateCountdown6, 1000);
    fhide6.style.display = "none";
}
function pause7(){
    setInterval(updateCountdown7, 1000);
    fhide7.style.display = "none";
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
function updateCountdown5(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl5.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown6(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl6.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}
function updateCountdown7(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? `0` * seconds : seconds;

    countdownEl7.innerHTML = `0${minutes}: ${seconds}`;
    time--;
}