const btnCalcular = document.querySelector('.btn__calc');
const btnLimpiar = document.querySelector('.btn__clean');
let pTermino, sTermino, diferencia, tEnesimo;
let resultado = document.querySelector('.result__display');
let proAritmetica = document.querySelector('.select__type');

btnCalcular.addEventListener('click', () => {    
    pTermino = parseFloat(document.querySelectorAll('.calc__input').item(0).value);
    sTermino = parseFloat(document.querySelectorAll('.calc__input').item(1).value);
    tEnesimo = parseFloat(document.querySelectorAll('.calc__input').item(2).value);

    //validacion de que todos los inputs sean numeros
    if (isNaN(pTermino) || isNaN(sTermino) || isNaN(tEnesimo)) {
        return alert('⚠ Debes completar todos los campos con numeros!');
    }

    //si la progresion es aritmetica se ejecuta esto
    if (proAritmetica.checked == true) {
        diferencia = sTermino - pTermino;
        tEnesimo = pTermino + (tEnesimo - 1) * diferencia;
    }
    //si la progresion es geometrica se ejecuta esto
    else {
        diferencia = sTermino / pTermino;
        tEnesimo = pTermino * (diferencia ** (tEnesimo - 1));
    }

    //si tiene decimales redondeamos a dos digitos los decimales
    if (!(Number.isInteger(diferencia))) {
        diferencia = diferencia.toFixed(2);
    }
    if (!(Number.isInteger(tEnesimo))) {
        tEnesimo = tEnesimo.toFixed(2);
    }
    
    resultado.innerHTML = `El termino enesimo: ${tEnesimo}
    <br>La diferencia es: ${diferencia}`;
});

btnLimpiar.addEventListener('click', () => {
    resultado.textContent = "Resultado: 0";
    document.querySelectorAll('.calc__input').item(0).value = '';
    document.querySelectorAll('.calc__input').item(1).value = '';
    document.querySelectorAll('.calc__input').item(2).value = '';
});
