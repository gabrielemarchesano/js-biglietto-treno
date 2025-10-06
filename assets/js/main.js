/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km),
va applicato uno sconto del 20% per i minorenni,
va applicato uno sconto del 40% per gli over 65.,
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

TOOLS:
- variabili let/const
- prompt
- condizioni if/else
- operatori relazionali e logici
*/

// 1. Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
  
  // 1.1 Creo una variabile per i chilometri
  
  // 1.2 Creo una variabile per l'età del passeggero

/***********************************************************************************/


// 2 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio
  
  // 2.1 Calcolo il prezzo del biglietto in base ai km (0.21€ al km)
    // 2.1.1 Creo due variabili per gli sconti under 18 e over 65
    // 2.1.2 Creo una variabile vuota per il costo totale del biglietto
  
  // 2.2 Verifico se l'età del passeggero è sotto i 18 anni
    // 2.2.1 Se è sotto i 18 anni, calcolo lo sconto del 20% al biglietto e lo stampo
  
  // 2.3 Verifico se l'età del passeggero è sopra i 65 anni
    // 2.3.1 Se è sopra i 65 anni, applico lo sconto del 40% al biglietto e lo stampo
  
    // 2.4 Se il passeggero non è minorenne e non è over 65, stampo il prezzo non scontato del biglietto

/***********************************************************************************/

// 1.
// 1.1
const kilometers = Number(prompt("Inserisci quanti chilometri vuoi percorrere"));
//Stampo la variabile per essere sicuro che il valore sia corretto
console.log(kilometers);
console.log("Vuoi percorrere: " + kilometers + " km");

// 1.2
const age = Number(prompt("Quanti anni hai?"));
//Stampo la variabile per essere sicuro che il valore sia corretto
console.log(age);
console.log("Hai: " + age + " anni");

// 2
// 2.1
const ticketTariff = 0.21;
//Stampo la variabile per essere sicuro che il valore sia corretto
console.log(ticketTariff);
console.log("La tariffa è di: " + ticketTariff + "€ al km");

//Creo una variabile che contenga il calcolo per il prezzo del biglietto
const ticketPrice = ticketTariff * kilometers;
console.log("Il prezzo del biglietto è: " + ticketPrice + "€");

// 2.1.1
const under18Sales = 20 / 100;
const over65Sales = 40 / 100;

// 2.1.2
let totalTicketPrice;

let salesText = "";

// 2.2
if(age < 18){ // 2.2.1
  //Inserisco nella variabile totalTicketPrice il calcolo per lo sconto under 18
  totalTicketPrice = ticketPrice - (ticketPrice  * under18Sales);
  //Inserisco nella variabile salesText una stringa personalizzata
  salesText = " con lo sconto under 18";
} else if(age > 65){ // 2.3
  //Inserisco nella variabile totalTicketPrice il calcolo per lo sconto over 65
  totalTicketPrice = ticketPrice - (ticketPrice  * over65Sales);
  //Inserisco nella variabile salesText una stringa personalizzata
  salesText = " con lo sconto over 65" 
} else { // 2.4
  //Inserisco nella variabile totale il prezzo del biglietto non scontato
  totalTicketPrice = ticketPrice;
}

//Stampo un messaggio per l'utente - utilizzo il metodo .toFixed(2) per mostrare solo due cifre decimali dopo la virgola
console.log(`Prezzo totale del biglietto${salesText}: ${totalTicketPrice.toFixed(2)}€`);
