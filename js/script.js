// # TRACCIA

/*
Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.

Buon lavoro!
*/

// # PROCEDURA

// # RACCOLTA DATI
/* richiesta età passeggero */
let userAge = parseInt(prompt("Inserisci la tua età"));
let userAgeValid = !isNaN(userAge) && 1 < userAge && userAge < 85;

console.log("età utente:", userAge);

/* richiesta numero km da percorrere */
let travelKilometers = parseInt(prompt("Inserisci totale km da percorrere"));
let travelKilometersValid = !isNaN(travelKilometers);

console.log("km da percorrere:", travelKilometers);

/* risultato prezzo viaggio NO SCONTO*/
const totPrizeNoDiscounted = travelKilometers * 0.21;
console.log("totale prezzo viaggio senza sconto:", totPrizeNoDiscounted);

/* sconto under 18*/
const discountUnder18 = 20;

/* sconto over 65*/
const discountOver65 = 40;

/* calcolo sconto */
let totDiscount;

/* risultato prezzo viaggio CON SCONTO*/
let totPrizeDiscounted;

// # ELABORAZIONE
/* calcolo prezzo totale viaggio in base ai km inseriti NO SCONTO APPLICATO */

/* SE età passeggero AND chilometri da percorrere sono validi */
if (userAgeValid && travelKilometersValid) {
  /* SE età passeggero è minore di 18 */
  if (userAge <= 18) {
    /* calcolo il 20% di sconto sul prezzo totale del biglietto */
    totDiscount = (totPrizeNoDiscounted * discountUnder18) / 100;

    /* sottraggo il valore dello sconto precedentemente calcolato al totale del biglietto non scontato */
    totPrizeDiscounted = totPrizeNoDiscounted - totDiscount;
  } else if (userAge >= 65) {
    /* ALTRIMENTI SE età passeggero è maggiore di 65 */
    /* calcolo il 40% di sconto sul prezzo totale del biglietto */
    totDiscount = (totPrizeNoDiscounted * discountOver65) / 100;

    /* sottraggo il valore dello sconto precedentemente calcolato al totale del biglietto non scontato */
    totPrizeDiscounted = totPrizeNoDiscounted - totDiscount;
  } else {
    /* ALTRIMENTI il totale del prezzo non scontato equivale al prezzo definitivo */
    totPrizeDiscounted = totPrizeNoDiscounted;
  }

  // # OUTPUT
  /* stampa prezzo totale del viaggio con massimo 2 decimali */
  alert("totale prezzo viaggio: " + totPrizeDiscounted + " €");
} else {
  // # OUTPUT
  alert("Valori inseriti dall'utente non validi");
}
