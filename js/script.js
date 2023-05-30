"use strict"
//DICHIARO FUNZIONE PER GENERARE NUMERI CASUALI
function generateRandomNumber(max){
    return Math.floor(Math.random() * max)
}

//FUNZIONE CHE SI ATTIVERà DOPO UN TOT DI TEMPO
setTimeout(hideNumber, 3000);

/*La funzione che si attiva dopo 3sec. nasconderà ,con una classe,
i numeri generati randomicamente
*/
function hideNumber (){
    tag_numbers.classList.add("hide");
}

//array vuoto per i numeri casuali e array per i numeri utente
let array_random = [];
let array_user = []

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
let tag_numbers = document.getElementById("pc-number")
tag_numbers.innerHTML = array_random  ;


//faccio comparire 5 prompt per l'inserimento dei numeri da parte dell'utente 
setTimeout(function(){
    for(let i=0 ; i<5 ; i++){

        let user_number = parseInt(prompt("Inserisci uno alla volta i numeri precedentemente visualizzati"));

        // while(isNaN(user_number)) {
        //     alert("non hai inserito un numero");
        // }

        //inserisco i numeri utente in un array
        array_user.push(user_number);
        
    }
    
    let matching_numbers = [];

    //controllo tra input utente e numeri casuali
    for( let i=0 ; i<array_random.length ; i++){
    
        if(array_random.includes(array_user[i])){

            
            //inserisco i numeri idovinati nell'array
            matching_numbers.push(array_user[i]);
        }
        
    }
    //stampo il risultato a video
    let tag_result = document.getElementById("result");
    tag_result.innerHTML += `hai indovinato ${matching_numbers.length} numeri: ${matching_numbers}`;
    
},3900);


