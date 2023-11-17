// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

const listName = [ 'Giovanna', 'Giacomo' , 'Giorgio', 'Valeria'];
const listSurname = ['Rossi', 'Bianchi', 'Verdi', 'Ginetti'];
const mixList = [];

for (let i = 0; i <listName.length ; i++) {
let firstNameGen = listName [Math.floor (Math.random() * listName.length)]
let lastNameGen = listSurname [Math.floor (Math.random() * listSurname.length)];
let completeNameGen = firstNameGen + lastNameGen;
mixList.push(completeNameGen);
console.log (firstNameGen, lastNameGen);
}

console.log(mixList);


