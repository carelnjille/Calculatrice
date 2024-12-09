"use strict";
const resul = document.getElementById("calc.space");
var heure2 = document.getElementById("heure");
var minute2 = document.getElementById("minute");
const time = new Date;
var heure = time.getHours();
var minute = time.getMinutes();
heure2.innerHTML = `${heure}h :`;
minute2.innerHTML = `${minute}`;
function efface() {
    resul.value = resul.value.slice(0, -1); // fonction 1 : retour
}
function efface_tout() {
    resul.value = ""; // fonction 2 : tout effacer
}
function saisy(element) {
    resul.value += element; // fonction 3 : affichage
}
function calcul() {
    try {
        if ((resul.value).includes("^")) {
            const i = resul.value.indexOf("^");
            var y;
            var x;
            y = parseFloat(resul.value.substring(0, i));
            x = parseFloat(resul.value.substring(i + 1));
            resul.value = Math.pow(y, x).toString();
        }
        else if ((resul.value).includes("%")) {
            const j = resul.value.indexOf("%");
            var a;
            var b;
            a = parseFloat(resul.value.substring(0, j));
            b = parseFloat(resul.value.substring(j + 1));
            var z = a % b;
            resul.value = z.toString();
        }
        else {
            resul.value = eval(resul.value);
        } // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function power() {
    try {
        resul.value += '^';
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function fact(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
function facto() {
    try {
        console.log(resul.value);
        var resultat = fact(parseInt(resul.value));
        resul.value = resultat.toString();
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function racine() {
    try {
        var resultat = Math.sqrt(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString();
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function binaire() {
    try {
        var resultat;
        if (!isNaN(parseInt(resul.value))) {
            resultat = parseInt(resul.value); // fonction 4 : le calcul
            resul.value = resultat.toString(2);
        }
        else {
            resultat = parseInt(resul.value, 16);
            resul.value = resultat.toString(2);
        }
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function decimal() {
    try {
        var resultat;
        if (!isNaN(parseInt(resul.value))) {
            resul.value = parseInt(resul.value).toString(10);
        }
        else {
            resultat = parseInt(resul.value, 16);
            resul.value = resultat.toString(2);
        }
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function decimalToHex(decimal) {
    let hex = '';
    while (decimal > 0) {
        const remainder = decimal % 16;
        hex = (remainder < 10 ? remainder.toString() : String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0))) + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}
function hexdec() {
    try {
        var resultat;
        resultat = decimalToHex(parseInt(resul.value));
        resul.value = resultat;
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function expo() {
    try {
        console.log(resul.value);
        var resultat = Math.exp(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function ln() {
    try {
        var resultat = Math.log(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function mod() {
    try {
        resul.value += '%'; // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function cos() {
    try {
        var resultat = Math.cos(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function sin() {
    try {
        var resultat = Math.sin(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function tan() {
    try {
        var resultat = Math.tan(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    }
    catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
