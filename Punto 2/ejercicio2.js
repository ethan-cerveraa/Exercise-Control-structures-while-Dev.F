let num1 = parseInt(prompt("Ingresa un número al azar entre 1 y 50:"));
let num2 = parseInt(prompt("Ingresa otro número al azar entre 1 y 50:"));

console.log("Números del 1 al 50 y ganadores de la loteria:");

let i = 0;
if (i <= 51) {
    while (i <= 50) {
        if (i === num1 || i === num2) {
            console.log(i + " ¡Lotería!");
            i = i + 1;
        } else {
            console.log(i);
            i = i + 1;
        }
    }
}
else {
    console.log('termino el proceso');
}
