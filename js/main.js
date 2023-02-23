// CALCOLO COSTO BIGLIETTO TRENO

/*
    Richiedo età del passeggero
    Richiedo distanza in km da percorrere
    Prezzo del tragitto al 0.21€/km
    sconto 40% per over 65
    Mostra risultato con massimo 2 decimali
    
*/

//Definizione elementi dom
const generaDom = document.querySelector("#genera");
const annullaDom = document.querySelector("#annulla");
const prezzoBigliettoDom = document.querySelector("#prezzoBiglietto");
const scontoDom = document.querySelector("#sconto");

//Definizione Nome Cognome
const NomeCognomeInputDom = document.getElementById("nomeCognome");


//Definizione Lunghezza Tragitto
const lunghezzaTragittoInputDom = document.getElementById("lunghezzaTragitto");


//Definizione Fascia d'età
const fasciaEtaInputDom = document.getElementById("fasciaEta");


//Generazione prezzo

//Prezzo del tragitto al km
const prezzoAlKm = 0.21;

// Scontistica
const scontoMinorenni = 0.8;
const scontoOver65 = 0.6;


//Calcolo prezzo biglietto con arrotondamento 2 decimali

generaDom.addEventListener ('click',
    function () {
        
        const NomeCognomeDom = NomeCognomeInputDom.value;
        const lunghezzaTragittoDom = lunghezzaTragittoInputDom.value;
        const fasciaEtaDom = fasciaEtaInputDom.value;
   
        if (isNaN(lunghezzaTragittoDom)) {
        prezzoBigliettoDom.innerHTML = 'Impossibile fare il calcolo, hai inserito qualcosa che non è un numero';
        } else {


        if (fasciaEtaDom == "minorenne") {

            // Under 18 sconto 20%

            //Calcolo prezzo scontato
            let prezzoBigliettoLungo = (lunghezzaTragittoDom * prezzoAlKm) * scontoMinorenni;

            //Definizione decimali
            let prezzoBiglietto = prezzoBigliettoLungo.toFixed(2);

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `€ ${prezzoBiglietto}`

            sconto.innerHTML =
                `Hai usufruito dello sconto del 20% per under 18!`

        } else if (fasciaEtaDom == "over65") {

            // Over 65 sconto 40% 

            //Calcolo prezzo scontato
            let prezzoBigliettoLungo = (lunghezzaTragittoDom * prezzoAlKm) * scontoOver65;

            //Definizione decimali
            let prezzoBiglietto = prezzoBigliettoLungo.toFixed(2);

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `€ ${prezzoBiglietto}`

            sconto.innerHTML =
                `Hai usufruito dello sconto del 40% per over 65!`

        } else if (fasciaEtaDom == "maggiorenne") {

            // Tariffa standard

            //Calcolo prezzo biglietto
            let prezzoBigliettoLungo = (lunghezzaTragittoDom * prezzoAlKm);

            //Definizione decimali
            let prezzoBiglietto = prezzoBigliettoLungo.toFixed(2);

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `€ ${prezzoBiglietto}`

        }
    }

    }
)






