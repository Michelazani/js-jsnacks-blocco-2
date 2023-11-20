/*Crea una funzione che accetta due elementi del dom,
uno e' il parent e 
l'altro e' un elemento che voglio sia aggiunto al parent come figlio.
*/


// parent
const tagInside = document.getElementById('output') 

// nuovo elemento
const tagToAdd = document.createElement ('div');

// funzione che aggiunga il secondo al primo elemento
function elemntToAdd (fatherElement, elementInside){
    fatherElement.appendChild(elementInside)
}

elemntToAdd (elementInside, fatherElement)