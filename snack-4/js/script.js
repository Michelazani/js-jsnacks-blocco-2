//? Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//?  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function typedWord (wordOne, wordTwo) {
    if (firstWord.length == secondWord.length){
        return true;
    }
    else {
        return false;
    }
}

// ! return restituisce valore 

const firstWord = prompt('type a word');
const secondWord = prompt('type a word');
if (typedWord (firstWord.length == secondWord.length)){
    console.log (firstWord, secondWord)
}

else if(firstWord.length > secondWord.length){
    console.log(firstWord)
}

else {
    console.log (secondWord)
}




