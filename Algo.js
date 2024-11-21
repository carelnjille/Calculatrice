var result = document.getElementById("calc.space");
function efface() {
    result.value = result.value.slice(0, -1); // fonction 1 : retour
}
function efface_tout() {
    result.value = ""; // fonction 2 : tout effacer
}
function saisy(element) {
    result.value += element; // fonction 3 : affichage
}
function calcul() {
    try {
        result.value = eval(result.value); // fonction 4 : le calcul
    }
    catch (error) {
        result.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
