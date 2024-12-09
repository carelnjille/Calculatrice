
const resul = document.getElementById("calc.space") as HTMLInputElement;
var heure2 = document.getElementById("heure") as HTMLElement;
var minute2 = document.getElementById("minute") as HTMLElement;
const time = new Date;
var heure = time.getHours();
var minute = time.getMinutes();
heure2.innerHTML= `${heure}h :`
minute2.innerHTML= `${minute}`
 
function efface(): void {
    resul.value = resul.value.slice(0, -1); // fonction 1 : retour
}

function efface_tout(): void {
    resul.value = ""; // fonction 2 : tout effacer
}

function saisy(element: string): void {   
    resul.value += element; // fonction 3 : affichage
}

function calcul(): void {
    try {
        if((resul.value).includes("^")){
          const i:number = resul.value.indexOf("^");
          var y:number;
          var x:number;
          y = parseFloat(resul.value.substring(0, i));
          x = parseFloat(resul.value.substring(i+1));
          resul.value = Math.pow(y,x).toString();
        }else if((resul.value).includes("%")){
            const j:number = resul.value.indexOf("%");
            var a:number;
            var b:number;
            a = parseFloat(resul.value.substring(0, j));
            b = parseFloat(resul.value.substring(j+1));
             
            var z:number = a%b; 
             
             resul.value =z.toString();
        }else{
        resul.value = eval(resul.value);
    } // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function power(): void {
    try {
         resul.value +='^';
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function fact(n: number) : number{
if(n==0){
    return 1;
}else{
    return n*fact(n-1);
 }
}
function facto(): void {
    try {
        console.log(resul.value);
        var resultat:number = fact(parseInt(resul.value)); 
        resul.value = resultat.toString();     
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function racine(): void {
    try {
       var resultat:number = Math.sqrt(parseFloat(resul.value)); // fonction 4 : le calcul
       resul.value = resultat.toString();
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function binaire(): void {
    try {
        var resultat:number;
        if(!isNaN(parseInt(resul.value))){
        resultat = parseInt(resul.value); // fonction 4 : le calcul
        resul.value = resultat.toString(2);
    }else{
        resultat = parseInt(resul.value, 16);
        resul.value = resultat.toString(2);
    }
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function decimal(): void {
    try {
        var resultat:number;
         if(!isNaN(parseInt(resul.value))){
            resul.value = parseInt(resul.value).toString(10);
         }else{
            resultat = parseInt(resul.value, 16);
            resul.value = resultat.toString(2);
         }
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function decimalToHex(decimal: number): string {
    let hex = '';
    while (decimal > 0) {
        const remainder = decimal % 16;
        hex = (remainder < 10 ? remainder.toString() : String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0))) + hex;
        decimal = Math.floor(decimal / 16);
    }
    return hex;
}

function hexdec(): void {
    try {
        var resultat:string; 
        resultat  = decimalToHex(parseInt(resul.value));
        resul.value = resultat;  
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function expo(): void {
    try {
        console.log(resul.value);
        var resultat:number = Math.exp(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function ln(): void {
    try {
        var resultat:number = Math.log(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function mod(): void {
    try {
         resul.value +='%'; // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function cos(): void {
    try {
        var resultat:number = Math.cos(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function sin(): void {
    try {
        var resultat:number = Math.sin(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}
function tan(): void {
    try {
        var resultat:number = Math.tan(parseFloat(resul.value)); // fonction 4 : le calcul
        resul.value = resultat.toString(); // fonction 4 : le calcul
    } catch (error) {
        resul.value = "erreur de syntaxe"; // gestion des erreurs
    }
}