/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*function crazySum(a,b){
     if (a===b) {
        return (a + b) * 3
     } else {
        return (a + b)
     }
}
console.log (crazySum(3,2))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*function boundary (n) {
    if ((n >= 20 && n <= 100) || (n === 400)) {
        return true
    } else {
        return false
    }
}
console.log(boundary(400))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*function reverseString (parola){
         return parola.split("").reverse().join("")
}
console.log(reverseString("epicode"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*function upperFirst (f){
    return f.split(" ").map (frase => frase[0]. toUpperCase() + frase.slice(1)). join(" ")
}
console.log(upperFirst("ciao come stai?"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*function giveMeRandom (n) {
    let numeri = []
    for (let i = 0; i < n; i++) {
        numeri.push(Math.floor(Math.random() * 11))
    }
    return numeri
}
console.log(giveMeRandom(5))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*function area (l1,l2) {
    return l1 * l2
}
console.log(area(7,3))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*function crazyDiff (a){
    let differenza = Math.abs(a-19)
    if (differenza > 19 ) {
        return differenza * 3
    } else {
        return differenza
    }
}
console.log(crazyDiff(100))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*function codify (stringa) {
    if (stringa.startsWith("code")){
        return stringa
    } else {
        return "code" + " " +  stringa 
    }
}
 console.log (codify("ciao"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*function check3and7 (a){
         if (a % 3===0 || a % 7 === 0) {
            return true
         } else {
            return false
         }
}
console.log(check3and7(55))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString (stringa) {
     return stringa.slice(1,stringa.length -1)
}
console.log(cutString("bene"))
