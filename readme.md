Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


PROBLEMA: Visualizzare in pagina 5 numeri casuali:

1-Dichiaro funzione per generare numeri casuali
2-Questa funzione la richiamo dentro un cirlo for, che dovrà ciclare per 5 volte (inserisco poi questi 5 numeri dentro un array)
3- dentro il ciclo for fare un controllo per essere sicuri che i numeri generati non si ripetano
4- Visualizzare i numeri in pagina


PROBLEMA: Far scomparire i numeri dopo 30 sec e far apparire 5 prompt uno dopo l'altro per fare inserire all'utente i 5 numeri random:

1-Utilizzare funzione setTimeout 
2-Dentro la funzione precedentemente nominata dare una classe display:none all'array dei 5 numeri e impostare il timer di 30 sec. (30 x 1000)
3-inserire un ciclo per far apparire 5 volte il prompt per l'inserimento dei numeri da parte dell'utente.

PROBLEMA: il software dice quanti e quali dei numeri da indovinare sono stati individuati:

1-Recuperare tutti i numeri che ha inserito l'utente
2-Confrontare i numeri utente con i numeri randomici dell'array 
   2.1 SE l'array randomico include i numeri utente allora restituisci quel numero
   2.2 ALTRIMENTI continua in controllo

