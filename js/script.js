"use strict";
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// seleziono i contenitori
const numeriHtml = document.getElementById('numeri');
const numeriInputHtml = document.getElementById('numeriUtente');
const risultatoHtml = document.getElementById('risultato');
const chiedi = document.getElementById('chiedi')
const btn = document.querySelector('button');
const numeriInseritiHtml = document.getElementById('numeriInseriti');
const boxUtenteHtml = document.getElementById('boxUtente');


let numeri = [];
let nNumeri = 5;


// creo un ciclo while per creare 5 numeri random diversi
while (numeri.length < nNumeri){
    let numeriRandom = randomNumber (1, 100);

    if(!numeri.includes(numeriRandom)){
        numeri.push(numeriRandom)
    }
}
console.log(numeri);


// stampo i numeri random in pagina
numeri.forEach(element => numeriHtml.innerHTML += `<span class="numeri">${element}</span>`);

let counter = 3;
console.log(counter);

const intervall = setInterval(() => {
    counter--;
    console.log(counter);
    if(counter == 0) {
        numeriHtml.classList.add('d-none');
        chiedi.innerHTML = 'riscrivi i numeri';
        boxUtenteHtml.classList.remove('d-none');
        clearInterval(intervall);
    }
}, 1000);


btn.addEventListener('click',function (){
    numeriHtml.innerHTML = '';
    const listaNumeriUtente = numeriInputHtml.value.split(" ");
    
    let RisposteGiuste = 0;
    
    console.log(listaNumeriUtente);
    for(let i = 0; i < listaNumeriUtente.length; i++){
        console.log(parseInt(listaNumeriUtente[i]));
        if(numeri.includes(parseInt(listaNumeriUtente[i]))) {
            numeriHtml.innerHTML += listaNumeriUtente[i] + ' ';
            console.log('lista' + listaNumeriUtente[i]);
            RisposteGiuste ++;
        }
        
    }

    if(RisposteGiuste == 5){
        numeriInputHtml.value = '';
        console.log(RisposteGiuste);
        risultato.classList.remove('d-none');
        risultato.innerHTML = 'numeri indovinati: ' + RisposteGiuste;
        numeriInseritiHtml.innerHTML = '';
        listaNumeriUtente.forEach(element => numeriInseritiHtml.innerHTML += `<span class="numeri">${element}</span>`)
        risultato.classList.remove('bg-danger');
        risultato.classList.add('bg-success');
        risultato.innerHTML = 'Hai indovinato tutti i numeri!!';
    }else{
        risultato.classList.remove('d-none');
        risultato.innerHTML = 'numeri indovinati: ' + RisposteGiuste;
        numeriInseritiHtml.innerHTML = '';
        listaNumeriUtente.forEach(element => numeriInseritiHtml.innerHTML += `<span class="numeri bg-danger">${element}</span>`)
    }



});

