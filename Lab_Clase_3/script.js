let array = [];

const sumar = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let resultado = num1 + num2;
    array.push(resultado);

    document.getElementById('resultado').innerHTML = resultado;
}
const restar = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let resultado = num1 - num2;
    array.push(resultado);

    document.getElementById('resultado').innerHTML = resultado;
}
const multiplicar = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let resultado = num1 * num2;
    array.push(resultado);

    document.getElementById('resultado').innerHTML = resultado;
}

const mostrarArray = () => {
    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        contenido += array[i] + " ";
    
    }
    document.getElementById('contenidoArray').innerHTML = contenido;
}