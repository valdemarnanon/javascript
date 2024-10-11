const resultado = document.querySelector('#cliente');
const formulario = document.querySelector('#formulario');

let gas = 0;
function gas1() {
    return gas += 1;
}

let gasolina = 0;
function gasolina1() {
    return gasolina += 1;
}

let disel = 0;
function disel1() {
    return disel += 1;
}

function imprimir() {
    document.querySelector(".alcool").innerHTML = "Gás: " + gas;
    document.querySelector(".gasolina").innerHTML = "Gasolina: " + gasolina;
    document.querySelector(".disel").innerHTML = "Disel: " + disel;
}

function capiturarClick(){
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 
        imprimir()
        console.log(e);
    });
}

capiturarClick();