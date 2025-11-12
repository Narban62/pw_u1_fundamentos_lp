let display1 = null;
let display2 = null;
let operacion = null;

function mostrarDisplay(valor) {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
}

function limpiarDisplay() {
    document.getElementById('display').innerText = "";
}

function operacionTipo(tipo) {
    display1 = parseFloat(document.getElementById('display').innerText);
    operacion = tipo;
    limpiarDisplay();
}

function borrar() {
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText.slice(0,-1);
}

function evaluarOperacion() {
    let display2 = parseFloat(document.getElementById('display').innerText);
    let resultado = 0;
    switch (operacion) {
        case '+':
            resultado = display1 + display2;
            break;
        case '-':
            resultado = display1 - display2;
            break;
        case '*':
            resultado = display1 * display2;
            break;
        case '/':
            resultado = display1 / display2;
            break;
        case '%':
            resultado = display1%display2;
            break;
        default:
            break;
    }
    document.getElementById('display').innerText = resultado;
}