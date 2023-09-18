document.addEventListener("DOMContentLoaded", function () {
    //Accedemos al parrafo que nos permitira imprimir el resultado 
    const parrafo = document.querySelector("#idParrafo");
    console.log(parrafo)

    //Accedemos a cada boton por medio de la API DOM
    const btnMetroPies = document.querySelector("#idBtnMetroPies");
    const btnMetroYardas = document.querySelector("#idBtnMetroYardas");
    const btnMetroPugadas = document.querySelector("#idBtnMetroPulgadas");

    //Agregamos el evento click a los botones, adicionalmente
    //se le asigna la funcion que realizará la operación
    btnMetroPies.addEventListener("click", MetroPies);
    btnMetroYardas.addEventListener("click", MetroYardas);
    btnMetroPugadas.addEventListener("click", MetroPugadas);

    //Creamos la variable que tendra el valor del resultado de la operación matematica
    let resultado;
    // Realizar las conversiones
    const pies = 3.28084;
    const yardas = 1.09361;
    const pulgadas = 39.3701;
    //Funcion de operaciones
    function MetroPies() {
        let metros = prompt("Ingrese el valor de los metros");
        resultado = metros * pies;
        parrafo.innerHTML = `${metros} metros equivale a  = ${resultado} pies`
    }

    function MetroYardas() {
        let metros = prompt("Ingrese el valor de los metros");
        resultado = metros * yardas;
        parrafo.innerHTML = `${metros} metros equivale a  = ${resultado} yardas`
    }

    function MetroPugadas() {
        let metros = prompt("Ingrese el valor de los metros");
        resultado = metros * pulgadas;
        parrafo.innerHTML = `${metros} metros equivale a  = ${resultado} pulgadas`
    }
});
