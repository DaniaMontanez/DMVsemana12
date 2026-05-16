function votacion() {
    let edad = parseInt(document.getElementById('edadUsuario').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(edad) || edad < 0) {
        resultado.innerText = "Por favor ingrese un edad valida.";
        return;
    }

    if (edad >= 18) {
        resultado.innerText = "Tienes edad suficiente para votar";
    } else {
        resultado.innerText = `Aun no puedes votar. Te faltan ${18 - edad} año(s).`;
    }
}

function Sueldo() {
    let horasTrabajadas = parseInt(document.getElementById('horas').value);
    let pagoPorHora = parseFloat(document.getElementById('pago').value);
    const resultado = document.getElementById('resultado');

    let sueldo;
    if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * pagoPorHora;
    } else {
        const horasNormales = 40 * pagoPorHora;
        const horasExtras = (horasTrabajadas - 40) * (pagoPorHora * 2);
        sueldo = horasNormales + horasExtras;
    }

    resultado.innerText = `El sueldo semanal es: $${sueldo.toFixed(2)}`;
}


function regalo() {
    const dinero = parseFloat(document.getElementById('dinero').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(dinero) || dinero < 0) {
        resultado.innerText = "Por favor, ingresa una cantidad válida.";
        return;
    }

    if (dinero <= 10) {
        resultado.innerText = "Puedes comprar una Tarjeta.";
    } else if (dinero <= 100) {
        resultado.innerText = "Puedes comprar Chocolates.";
    } else if (dinero <= 250) {
        resultado.innerText = "Puedes comprar Flores.";
    } else {
        resultado.innerText = "Puedes comprar un Anillo.";
    }
}

function estacionamiento() {
    let horas = parseInt(document.getElementById('horas').value);
    const resultado = document.getElementById('resultado');

    let costo;
    if (horas <= 2) {
        costo = horas * 5;
    } else if (horas <= 5) {
        costo = 10 + (horas-2) * 4;
    } else if (horas <= 10) {
        costo = 22 + (horas-5) * 3;
    } else {
        costo = 37 + (horas-10) * 2;
    }

    resultado.innerText = `El costo de estacionamiento es: $${costo.toFixed(2)}`;
}

function menorEdad() {
    let nombre1 = document.getElementById('nombre1').value;
    let edad1 = parseInt(document.getElementById('edad1').value);

    let nombre2 = document.getElementById('nombre2').value;
    let edad2 = parseInt(document.getElementById('edad2').value);

    let nombre3 = document.getElementById('nombre3').value;
    let edad3 = parseInt(document.getElementById('edad3').value);

    const resultado = document.getElementById('resultado');

    let menorNombre = nombre1;
    let menorEdad = edad1;

    if (edad2 < menorEdad) {
        menorNombre = nombre2;
        menorEdad = edad2;
    }

    if (edad3 < menorEdad) {
        menorNombre = nombre3;
        menorEdad = edad3;
    }

    resultado.innerText = `La persona de menor edad es ${menorNombre} con ${menorEdad} años.`;
}

function descuento() {
    let thing = parseInt(document.getElementById('thing').value);
    const resultado = document.getElementById('resultado');

    let costo;
    if (thing >= 200) {
        costo = thing - (thing * 0.15);
    } else if (thing >= 100) {
        costo = thing - (thing * 0.12);
    } else {
        costo = thing - (thing * 0.10);
    }

    resultado.innerText = `El precio final es: $${costo.toFixed(2)}`;
}

function beca() {
    const edad = parseInt(document.getElementById('edad').value);
    const promedio = parseFloat(document.getElementById('promedio').value);
    const resultado = document.getElementById('resultado');

    let beca;

    if (edad > 18) {
        if (promedio >= 9) {
            beca = 2000;
        } else if (promedio >= 7.5) {
            beca = 1000;
        } else if (promedio >= 6) {
            beca = 500;
        } else {
            resultado.innerText = "Se enviará carta de invitación.";
            return;
        }
    } else {
        if (promedio >= 9) {
            beca = 3000;
        } else if (promedio >= 8) {
            beca = 2000;
        } else if (promedio >= 6) {
            beca = 100;
        } else {
            resultado.innerText = "Se enviará carta de invitación.";
            return;
        }
    }

    resultado.innerText = `La beca asignada es de: $${beca.toFixed(2)}`;
}

function bono() {
    const years = parseInt(document.getElementById('years').value);
    const sueldo = parseFloat(document.getElementById('sueldo').value);
    const resultado = document.getElementById('resultado');

    let bonoyear = 0;
    if (years >= 2 && years < 5) {
        bonoyear = sueldo * 0.20;
    } else if (years >= 5) {
        bonoyear = sueldo * 0.30;
    }

    let bonosueldo = 0;
    if (sueldo < 1000) {
        bonosueldo = sueldo * 0.25;
    } else if (sueldo > 1000 && sueldo <= 3500) {
        bonosueldo = sueldo * 0.15;
    } else if (sueldo > 3500) {
        bonosueldo = sueldo * 0.10;
    }

    if (bonoyear === 0 && bonosueldo === 0) {
        resultado.innerText = "Necesitas al menos 2 años de antigüedad o un sueldo válido.";
        return;
    }

    let bonofinal = Math.max(bonoyear, bonosueldo);
    resultado.innerText = `Tu bono es de $${bonofinal.toFixed(2)}`;
}

function calcularPoliza() {
    const plan = document.getElementById('plan').value;
    const bebeAlcohol = document.getElementById('alcohol').checked;
    const usaLentes = document.getElementById('lentes').checked;
    const enfermedad = document.getElementById('enfermedad').checked;
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultado');

    let costoBase = (plan === "A") ? 1200 : 950;
    let costoFinal = costoBase;

    if (bebeAlcohol) costoFinal += costoBase * 0.10;
    if (usaLentes) costoFinal += costoBase * 0.05;
    if (enfermedad) costoFinal += costoBase * 0.05;
    if (edad > 40) {
        costoFinal += costoBase * 0.20;
    } else {
        costoFinal += costoBase * 0.10;
    }

    resultado.innerText = `El costo total de la póliza es: $${costoFinal.toFixed(2)}`;
}

function vacaciones() {
    const costoKm = parseFloat(document.getElementById('costoKm').value);
    const dinero = parseFloat(document.getElementById('dinero').value);
    const resultado = document.getElementById('resultado');

    const mexico = 750 * 2 * costoKm;
    const pv = 800 * 2 * costoKm;
    const acapulco = 1200 * 2 * costoKm;
    const cancun = 1800 * 2 * costoKm;

    let mensaje = "Con el dinero disponible puedes viajar a: ";

    if (dinero >= cancun) {
        mensaje += "Cancún, Acapulco, P.V. y México.";
    } else if (dinero >= acapulco) {
        mensaje += "Acapulco, P.V. y México.";
    } else if (dinero >= pv) {
        mensaje += "P.V. y México.";
    } else if (dinero >= mexico) {
        mensaje += "México.";
    } else {
        mensaje = "No alcanza para viajar, tendrás que quedarte en casa.";
    }

    resultado.innerText = mensaje;
}

function calcularBono() {
    const years = parseInt(document.getElementById('years').value);
    const resultado = document.getElementById('resultado');

    let bono;

    if (years >= 1 && years <= 5) {
        bono = years * 100; 
    } else if (years > 5) {
        bono = 1000;
    } else {
        bono = 0; 
    }

    resultado.innerText = `El bono por antigüedad es: $${bono.toFixed(2)}`;
}

function calcularSueldo() {
    const horas = parseInt(document.getElementById('horas').value);
    const pagoHora = parseFloat(document.getElementById('pago').value);
    const resultado = document.getElementById('resultado');

    if (horas > 50) {
        resultado.innerText = "No está permitido trabajar más de 50 horas.";
        return;
    }

    let sueldo = 0;

    if (horas <= 40) {
        sueldo = horas * pagoHora;
    } else if (horas <= 45) {
        sueldo = (40 * pagoHora) + ((horas - 40) * pagoHora * 2);
    } else { 
        sueldo = (40 * pagoHora) + (5 * pagoHora * 2) + ((horas - 45) * pagoHora * 3);
    }

    resultado.innerText = `El sueldo semanal es: $${sueldo.toFixed(2)}`;
}

function calcularPasaje() {
    const alumnos = parseInt(document.getElementById('alumnos').value);
    const resultado = document.getElementById('resultado');

    let costoAlumno;

    if (alumnos > 100) {
        costoAlumno = 20;
    } else if (alumnos >= 50) {
        costoAlumno = 35;
    } else if (alumnos >= 20) {
        costoAlumno = 40;
    } else {
        costoAlumno = 70;
    }

    resultado.innerText = `El costo del pasaje por alumno es: $${costoAlumno.toFixed(2)}`;
}