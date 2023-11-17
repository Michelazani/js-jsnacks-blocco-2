// ? Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// ? Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.


const newArray = [];

let i = 0;
while (i <50 ) {
    const typeNumber = parseInt (prompt ('type a number'));

    if (!isNaN (typeNumber)){
        i+=typeNumber
    }
    newArray.push(typeNumber);    
}

console.log(newArray, i);