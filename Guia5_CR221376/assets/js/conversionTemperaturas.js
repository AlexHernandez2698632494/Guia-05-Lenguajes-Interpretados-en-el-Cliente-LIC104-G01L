function generarCelsiusFahrenheit() {
    let mensaje;
    const parrafo = document.querySelector("#idParrafo");
    let Celsius = prompt("Ingrese el valor de los celsius");
    let resultado=(Celsius*9/5)+32;;
    mensaje = ` De ${Celsius} a Fahrenheit es  ${resultado} °F `;
    parrafo.innerHTML = mensaje;
}

///Conversion de Fahrenheit a Celsius
function generarFahrenheitCelsius() {
    let mensaje;
    const parrafo=document.querySelector("#idParrafo")
    let Fahrenheit = prompt("Ingrese el valor de los Fahrenheit");
    let resultado=(Fahrenheit-32)*(5/9);
    mensaje = ` De ${Fahrenheit} a Celsius es  ${resultado} °C `;
    parrafo.innerHTML = mensaje;
}

///Conversion de Celsius a Kelvin
function generarCelsiusKelvin() {
    let mensaje;
    const parrafo=document.querySelector("#idParrafo")
    let Kelvin = prompt("Ingrese el valor de los Kelvin");
    let resultado=(Kelvin-273.15);
    mensaje = ` De ${Kelvin} a Celsius es  ${resultado} °C `;
    parrafo.innerHTML = mensaje;
}