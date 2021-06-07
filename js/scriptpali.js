/* Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

function wordReverse(word) {

    // 1) Dividere la parola in singole lettere(si crea un array)
    var splitWord = word.split('');

    // 2) Invertire l'ordine degli elementi, quindi delle lettere, dell'array

    // 2.a) PRIMA SOLUZIONE con  CICLO FOR
    // var arrayReverse = [];

    // for(var i = splitWord.length - 1; i >= 0; i--){
    //     arrayReverse.push(splitWord[i])
    // }

    // 2.b) SECONDA SOLUZIONE con REVERSE

    var arrayReverse = splitWord.reverse();

    // 3) Unire le lettere in una nuova parola
    var joinWord = arrayReverse.join('');

    return joinWord;

}


var parola = prompt('Inserisci una parola, ti dirò se è palindorma!').toLowerCase();

var invParola = wordReverse(parola);

if (parola == invParola) {
    document.getElementById('Palindroma').innerHTML = 'La parola è palindroma';
} else {
   document.getElementById('Palindroma').innerHTML ='La parola non è palindroma.';
}

