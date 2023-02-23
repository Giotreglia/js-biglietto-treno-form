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
const nominativoDom = document.querySelector("#nominativo");
const tipologiaBigliettoDom = document.querySelector("#tipologiaBiglietto");
const numeroCarrozzaDom = document.querySelector("#numeroCarrozza");
const numeroPrenotazioneDom = document.querySelector("#numeroPrenotazione");
const ticketInfoDom = document.querySelector("#ticketinfo");

//Definizione Nome Cognome
const nomeCognomeInputDom = document.getElementById("nomeCognome");


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
        
        const nomeCognomeDom = nomeCognomeInputDom.value;
        const lunghezzaTragittoDom = parseInt(lunghezzaTragittoInputDom.value);
        const fasciaEtaDom = fasciaEtaInputDom.value;

        //Display ticketinfo
        ticketInfoDom.className = "bg-white visible";
        
        //Calcolo tariffa per fascia d'età

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
            `€ ${prezzoBiglietto}`;

            scontoDom.innerHTML =
                `Hai usufruito dello sconto del 20% per under 18!`;
            
            tipologiaBigliettoDom.innerHTML = 
                `Biglietto Under 18`

        } else if (fasciaEtaDom == "over65") {

            // Over 65 sconto 40% 

            //Calcolo prezzo scontato
            let prezzoBigliettoLungo = (lunghezzaTragittoDom * prezzoAlKm) * scontoOver65;

            //Definizione decimali
            let prezzoBiglietto = prezzoBigliettoLungo.toFixed(2);

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `€ ${prezzoBiglietto}`;

            scontoDom.innerHTML =
                `Hai usufruito dello sconto del 40% per over 65!`;
            
            tipologiaBigliettoDom.innerHTML = 
            `Biglietto Over 65`

        } else if (fasciaEtaDom == "maggiorenne") {

            // Tariffa standard

            //Calcolo prezzo biglietto
            let prezzoBigliettoLungo = (lunghezzaTragittoDom * prezzoAlKm);

            //Definizione decimali
            let prezzoBiglietto = prezzoBigliettoLungo.toFixed(2);

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `€ ${prezzoBiglietto}`;

            tipologiaBigliettoDom.innerHTML = 
            `Biglietto Standard`

        } else if (fasciaEtaDom == "vuoto") {

            //Azioni
            prezzoBigliettoDom.innerHTML =
            `Impossibile calcolare la tariffa, Seleziona fascia d'età`;

        }
    }

        //Nominativo passeggero
        nominativoDom.innerHTML = `${nomeCognomeDom}`;

        //Assegnazione carrozza
        const numeroCarrozza = Math.floor((Math.random() * 9)) + 1;
        numeroCarrozzaDom.innerHTML = `${numeroCarrozza}`;

        //Assegnazione Numero Prenotazione
        const numeroPrenotazione = Math.floor((Math.random() * 99999)) + 1;
        numeroPrenotazioneDom.innerHTML = `${numeroPrenotazione}`;

    }


)

//Reset form

annullaDom.addEventListener('click',
    function () {

        const nomeCognomeInputDom = document.getElementById("nomeCognome");
        const lunghezzaTragittoInputDom = document.getElementById("lunghezzaTragitto");
        const fasciaEtaInputDom = document.getElementById("fasciaEta");
        
        nomeCognomeInputDom.value = "";
        lunghezzaTragittoInputDom.value = "";
        fasciaEtaInputDom.value = "vuoto";

        //Display ticketinfo
        ticketInfoDom.className = "bg-white hidden";
    }
)




