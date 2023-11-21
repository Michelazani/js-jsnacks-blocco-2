/* Chiedo all'utente un numero e 
genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 
*/

// chiedo numero a utente
const userNumber = parseInt(prompt ('type a number'));

// funzione
function newSquare (){
    const newElement = document.createElement ('article');
    newElement.classList.add ('square');
    return newElement;
}

const mainContentEl = document.getElementById('output');

for (let i= 1; i<=userNumber; i++ ){
    mainContentEl.appendChild(newSquare);
}
