while (true) {
    let dia = prompt("Introduce tu día favorito de la semana:");

    if (dia.toLowerCase() === "domingo") {
        alert("Ve a descansar");
    }

    else if (dia.toLowerCase() === "lunes") {
        alert("¡Que tengas un maravilloso inicio de semana!");
        break;
    }
    else if (dia.toLowerCase() === "martes") {
        alert("¡Un buen día para sonreír!");
        break;
    }
    else if (dia.toLowerCase() === "miercoles") {
        alert("Miercoles locochon, sigue con la mejor actitud!");
        break;
    }
    else if (dia.toLowerCase() === "jueves") {
        alert("¡A pocos días del fin de semana, disfruta el juernes");
        break;
    }
    else if (dia.toLowerCase() === "viernes") {
        alert("Es viernes y el cuerpo lo sabe");
        break;
    }
    else if (dia.toLowerCase() === "sabado") {
        alert("Comenzo el FDS, aprovecha tu sabado");
        break;
    }
    else {
        alert("Día no reconocido. Por favor, introduce un día válido.");
        break;
    }

}