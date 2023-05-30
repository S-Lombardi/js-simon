"use strict"
//DICHIARO FUNZIONE PER GENERARE NUMERI CASUALI
function generateRandomNumber(max){
    return Math.floor(Math.random() * max)
}

//FUNZIONE CHE SI ATTIVERà DOPO UN TOT DI TEMPO
setTimeout(hideNumber, 3000);

//array vuoto in cui inserirò i numeri random
let array_random = [];

//chiamo la funzione e inserisco la classe hide nel div dei numeri random
function hideNumber (){
    element_numbers.classList.add("hide")  
}

//ciclo per 5 volte la funzione che genera numeri randomici
for(let i=0 ; i<5 ; i++) {
    
    //Definisco il range dei numeri da generare
    let max = 20 ;
    
    //Chiamo la funzione che genera numeri random
    let number = generateRandomNumber(max);
    
    //controllo che i numeri generati non si ripetano
    while(array_random.includes(number)){
        number = generateRandomNumber(max);
    }
    
    //inserisco i numeri random nell'array
    array_random.push(number);

}



//stampo i numeri random a video
let element_numbers = document.getElementById("pc-number")
element_numbers.innerHTML = array_random  ;
