var timer = 0;
var seconds = 0;
var tens =0;
var saved = [];

appendSeconds = document.getElementById('seconds');
appendTens = document.getElementById('tens');
appendSaved = document.getElementById('saved');

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var record = document.getElementById('record');
var interval;

var startClicked = 0

setUp();

function setUp() {

start.addEventListener("click", function() {
    if(startClicked == 0) {
        clearInterval(interval);
        interval= setInterval(startTimer, 10);
        startClicked = 1;
        return;
    }
    if(startClicked == 1) {
        clearInterval(interval);
        startClicked = 0;
        return;
    }
});

reset.addEventListener("click", function() {
    clearInterval(interval);
    timer = 0;
    seconds=0;
    tens=0;
    appendSeconds.innerHTML = timer;
    appendTens.innerHTML = timer;
    saved = [];
    appendSaved.innerHTML = "";
});

record.addEventListener("click", function() {
    saved.push(appendSeconds.innerHTML + "." + appendTens.innerHTML);
    var i = saved.length - 1;
    appendSaved.innerHTML = appendSaved.innerHTML + "<p>"+saved[i]+"</p>";
})

function startTimer() {
    tens++;
    if(tens<9) {
        appendTens.innerHTML = "0" + tens;
    }
    if(tens>9) {
        appendTens.innerHTML = tens;
    }
    if(tens>99) {
        seconds++;
        appendSeconds.innerHTML = seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
}
}