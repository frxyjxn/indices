
/* Practica 11 */
function obtenerValores() {
    let nombreInput = document.getElementById("nombre").value.trim();
    let horasInput = document.getElementById("horas").value;
    let pagoInput = document.getElementById("pago").value;

    let horas = Number(horasInput);
    let pago = Number(pagoInput);

    function esEntero(valor) {
        return Number.isInteger(valor);
    }

    if (nombreInput.length < 10) {
        alert("El nombre debe tener al menos 10 caracteres.");
        return null;
    }

    if (!esEntero(horas) || !esEntero(pago) || horas <= 0 || pago <= 0) {
        alert("Ingrese valores numéricos enteros válidos.");
        return null;
    }

    return { nombre: nombreInput, horas: horas, pago: pago };
}

function calcularPagoNormal(horas, pago) {
    return horas * pago;
}

function calcularPagoExtra(horasExtras, pago) {
    return horasExtras * (pago * 1.5);
}

function calcularSueldo() {
    let datos = obtenerValores();
    if (!datos) return;

    let normales = datos.horas > 40 ? 40 : datos.horas;
    let extras = datos.horas > 40 ? datos.horas - 40 : 0;

    let pagoNorm = calcularPagoNormal(normales, datos.pago);
    let pagoExt = calcularPagoExtra(extras, datos.pago);
    let total = pagoNorm + pagoExt;

    mostrarResultado(datos.nombre, datos.pago, normales, pagoNorm, extras, pagoExt, total);
}

function mostrarResultado(nombre, pago, horasNormales, pagoNormal, horasExtras, pagoExtra, totalPagar) {
    let tabla = document.getElementById("resultado").getElementsByTagName("tbody")[0];

    let filaNormales = document.createElement("tr");

    filaNormales.innerHTML = "<td>" + nombre + "</td>" +
        "<td>" + pago + "</td>" +
        "<td>" + horasNormales + "</td>" +
        "<td>" + pagoNormal + "</td>";

    let filaExtras = document.createElement("tr");

    filaExtras.innerHTML = "<td>" + horasExtras + "</td>" +
        "<td>" + pagoExtra + "</td>" +
        "<td>" + totalPagar + "</td>" +
        "<td></td>";

    tabla.appendChild(filaNormales);
    tabla.appendChild(filaExtras);
}

//Practica 12
function analizarNumero() {

    let input = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    let numero = parseFloat(input);
 
    if (isNaN(numero)) {

        resultado.textContent = "Es un texto.";

        return;

    }
 
    if (!Number.isInteger(numero)) {

        resultado.textContent = "El número tiene decimales.";

        return;

    }
 
    if (numero >= 1900 && numero <= 2100) {

        let mensaje = "";

        if ((numero % 4 === 0 && numero % 100 !== 0) || (numero % 400 === 0)) {

            mensaje += "Es un año bisiesto. ";

        } else {

            mensaje += "No es un año bisiesto. ";

        }
 
        if (esPrimo(numero)) {

            mensaje += "Es un número primo.";

        } else {

            mensaje += "Es un número compuesto.";

        }
 
        resultado.textContent = mensaje;

    } else {


        if (numero % 2 === 0) {

            resultado.textContent = "Es un número par.";

        } else {

            resultado.textContent = "Es un número impar.";

        }

    }

}
 
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true
}
 
/* Practica 13 */
function validacalif() {
    var mensaje = "";
    var ing = parseFloat(document.getElementById('ing').value.trim());
    var math = parseFloat(document.getElementById('math').value.trim());
    var hist = parseFloat(document.getElementById('hist').value.trim());
    var quim = parseFloat(document.getElementById('quim').value.trim());
    var web = parseFloat(document.getElementById('web').value.trim());
    var serv = parseFloat(document.getElementById('serv').value.trim());

    var resultadoDiv = document.getElementById("resultado"); // Seleccionar el div

    if (isNaN(ing) || isNaN(math) || isNaN(hist) || isNaN(quim) || isNaN(web) || isNaN(serv)) {
        alert("Todos los campos son obligatorios.");
        resultadoDiv.style.display = "none"; 
        return;
    } 

    if (ing < 1 || ing > 10 || math < 1 || math > 10 || hist < 1 || hist > 10 || quim < 1 || quim > 10 || web < 1 || web > 10 || serv < 1 || serv > 10) {
        alert("Las calificaciones deben estar entre 1 y 10.");
        resultadoDiv.style.display = "none"; 
        return;
    }

    var promedio = (ing + math + hist + quim + web + serv) / 6;
    mensaje = "Tu promedio es: " + promedio.toFixed(1);

    var maxCalificacion = Math.max(ing, math, hist, quim, web, serv);
    var minCalificacion = Math.min(ing, math, hist, quim, web, serv);

    var materiaMax = "";
    var materiaMin = "";

    if (maxCalificacion === ing) materiaMax = "Ingles IV";
    else if (maxCalificacion === math) materiaMax = "Temas selectos de matemáticas I";
    else if (maxCalificacion === hist) materiaMax = "Conciencia histórica I";
    else if (maxCalificacion === quim) materiaMax = "Reacciones químicas";
    else if (maxCalificacion === web) materiaMax = "WEB II";
    else if (maxCalificacion === serv) materiaMax = "Instala Equipos y Servidores WEB";

    if (minCalificacion === ing) materiaMin = "Ingles IV";
    else if (minCalificacion === math) materiaMin = "Temas selectos de matemáticas I";
    else if (minCalificacion === hist) materiaMin = "Conciencia histórica I";
    else if (minCalificacion === quim) materiaMin = "Reacciones químicas";
    else if (minCalificacion === web) materiaMin = "WEB II";
    else if (minCalificacion === serv) materiaMin = "Instala Equipos y Servidores WEB";

    mensaje += "\nLa calificación más alta es en: " + materiaMax + " con un " + maxCalificacion;
    mensaje += "\nLa calificación más baja es en: " + materiaMin + " con un " + minCalificacion;

    resultadoDiv.innerText = mensaje;
    resultadoDiv.style.display = "flex"; // Mostrar el resultado
}

