/* Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

function wordReverse(word) {

    // Dividere la parola in singole lettere(si crea un array)
    var splitWord = word.split('');

    // Invertire l'ordine degli elementi, quindi delle lettere, dell'array
    var arrayReverse = splitWord.reverse();

    // Unire le lettere in una nuova parola
    var joinWord = arrayReverse.join('');

    return joinWord

}


var parola = prompt('Inserisci una parola, ti dirò se è palindorma!').toLowerCase();

var invParola = wordReverse(parola);

if (parola == invParola) {
    document.getElementById('Palindroma').innerHTML = 'La parola è palindroma'
} else {
    document.getElementById('Palindroma').innerHTML ='La parola non è palindroma.'
}


