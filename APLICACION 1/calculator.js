const btnCalcular = document.querySelector('.calc__btn');
const btnLimpiar = document.querySelector('.result__clean-btn');
let capital, interes, tiempo, interesFinal;
let resultado = document.querySelector('.result__display');
let intSimple = document.querySelector('.select__type');

btnCalcular.addEventListener('click', () => {    
    capital = parseFloat(document.querySelectorAll('.calc__input').item(0).value);
    interes = parseFloat(document.querySelectorAll('.calc__input').item(1).value);
    tiempo = parseFloat(document.querySelectorAll('.calc__input').item(2).value);

    //validacion de que todos los inputs sean numeros
    if (isNaN(capital) || isNaN(interes) || isNaN(tiempo)) {
        return alert('⚠ Debes completar todos los campos con numeros');
    }

    //si el interes es simple se ejecuta esto
    if (intSimple.checked == true) {
        interesFinal = capital * (interes / 100) * tiempo;
        resultado.textContent = `Resultado: $${interesFinal.toFixed(2)}`;
    }
    //si el interes es compuesto se ejecuta esto
    else {
        interesFinal = capital * ((1 + (interes / 100)) ** tiempo - 1);
        resultado.textContent = `Resultado: $${interesFinal.toFixed(2)}`;
    }
});

btnLimpiar.addEventListener('click', () => {
    resultado.textContent = "Resultado: $0.00";
    document.querySelectorAll('.calc__input').item(0).value = '';
    document.querySelectorAll('.calc__input').item(1).value = '';
    document.querySelectorAll('.calc__input').item(2).value = '';
});
