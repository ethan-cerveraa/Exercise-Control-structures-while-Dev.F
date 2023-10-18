let numero = parseInt(prompt("Introduce un número al azar:"));

if (isNaN(numero)) {
    alert("El número introducido no tiene multiplos de 5.");
}

else {
    let contador = 1;
    let multiplos = "";
    while (contador <= numero) {
        if (contador % 5 === 0) 
        {multiplos += contador + ", ";}
        contador++;
    }
}
contador++;

if (multiplos.length > 0) {
    
    alert("Los múltiplos de 5 hasta " + numero + " son: " + multiplos);
}

else {
    alert("No hay múltiplos de 5 hasta " + numero + ".");
}