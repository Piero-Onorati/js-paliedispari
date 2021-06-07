/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pairOdispari(number) {
    if (number % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'  
    }    
}

// Utente sceglie se pari o dispari
var pariDispari = prompt('Ciao Utente, scegli tra "pari" o "dispari"');

// Utente sceglie un numero
var user = prompt('Perfetto! Ora scegli un numero da 1 a 5');
document.getElementById('numeroutente').innerHTML = user;

// Controllo su numero utente
if (user < 0 || user > 5) {
    alert('Attenzione! Sceglier un numero da 1 a 5')
}

// Numero random generato dal computer
var computer = getRnd (1,5);
document.getElementById('numeroPC').innerHTML = computer;

var somma = user + computer;

if (pairOdispari(somma) == pariDispari ) {
    document.getElementById("esito").innerHTML = 'Hai vinto!!!';
}else{
    document.getElementById("esito").innerHTML = 'Hai perso';
}


