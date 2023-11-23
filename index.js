const numero1 = document.getElementById("caja1");
const numero2 = document.getElementById("caja2");
const suma = document.getElementById("botonSuma");
const resta = document.getElementById("botonResta");
const multi = document.getElementById("botonMulti");
const div = document.getElementById("botonDiv");
const resultado = document.getElementById("resultado")

botonSuma.addEventListener('click', () => {
    var valorPrimero = parseInt(numero1.value);
    var valorSegundo = parseInt(numero2.value);
    resultado.innerText = `El resultado de la operación es ${valorPrimero + valorSegundo}`; 

});

botonResta.addEventListener('click', () => {
    var valorPrimero = parseInt(numero1.value);
    var valorSegundo = parseInt(numero2.value);
    resultado.innerText = `El resultado de la operación es ${valorPrimero - valorSegundo}`; 
})

botonMulti.addEventListener('click', () => {
    var valorPrimero = parseInt(numero1.value);
    var valorSegundo = parseInt(numero2.value);
    resultado.innerText = `El resultado de la operación es ${valorPrimero * valorSegundo}`; 
})

botonDiv.addEventListener('click', () => {
    var valorPrimero = parseInt(numero1.value);
    var valorSegundo = parseInt(numero2.value);
    resultado.innerText = `El resultado de la operación es ${valorPrimero / valorSegundo}`; 
})