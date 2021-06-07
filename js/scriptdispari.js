/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pariOdispari(number) {
    if (number % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari'; 
    }    
}

// ------------------ INPUT ------------------- //

// Utente sceglie se pari o dispari
var pariDispari = prompt('Ciao Utente, scegli tra "pari" o "dispari"');

// Utente sceglie un numero
var user = parseInt(prompt('Perfetto! Ora scegli un numero da 1 a 5'));

// Controllo su numero utente
while (user < 0 || user > 5) {
    user = parseInt(prompt('Attenzione! Scegliere un numero da 1 a 5'));
}

// Numero random generato dal computer
var computer = getRnd (1,5);


// ------------------ ELABORATION ------------------- //

var somma = user + computer;


// ------------------ OUTPUT ------------------- //

document.getElementById('numeroutente').innerHTML = user;

document.getElementById('numeroPC').innerHTML = computer;

if (pariOdispari(somma) == pariDispari) {
    document.getElementById("esito").innerHTML = 'Hai vinto!!!';
}else{
    document.getElementById("esito").innerHTML = 'Hai perso';
}