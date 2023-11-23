/*Cliccando su un pulsante, 
viene avviato un cronometro.
 Per fermare il cronometro, bisogna cliccare su un secondo pulsante*/

const buttonTimer = document.getElementById('start');
const stopTimer = document.getElementById ('stop');
const secondsTimer = document.getElementById ('second');

// inizializzo con variabile 
let clock;

// bottone per far partire il timer
buttonTimer.addEventListener ('click', function (){

    clock = setInterval (function(){
        secondsTimer.innerHTML = parseInt (secondsTimer.innerText, 10) +1;
    },1000);
    // faccio set interval che va all'infinito
})

// bottone per fermare timer
stopTimer.addEventListener ('click', function(){
    clearInterval (clock)
})

