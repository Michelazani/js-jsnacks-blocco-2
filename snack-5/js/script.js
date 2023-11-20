/*Crea una funzione che accetta due numeri, 
se il primo e' divisibile per il secondo, allora ritorna vero, 
altrimenti ritorna falso.
bonus: se sono uguali, ritorna il numero
*/

function numberInside (firstNumber, secondNumber){
    /* micro bonus:
    if (firstNumber === secondNumber){
        return firstNumber
    }
    else */ if (firstNumber % secondNumber === 0){
        return true;
    }
    else {
        return false;
    }
}

const firstNumber = prompt('type a number');
const secondNumber = prompt('type a number');