const monto = document.getElementById('monto');
const tiempo = document.getElementById('tiempo');
const interes = document.getElementById('interes');
const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiar = document.getElementById('btnLimpiar');
const alerta = document.getElementById('alert-error');
const total = document.getElementById('total');
const llenarTabla = document.querySelector('#lista-tabla tbody');

btnCalcular.addEventListener('click', () => {
    if (isNaN(monto.value) || isNaN(interes.value) || isNaN(tiempo.value)) {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        calcularCuota(monto.value, interes.value, tiempo.value);
    }
})

btnLimpiar.addEventListener('click', () => {
    monto.value = '';
    tiempo.value = '';
    interes.value = '';
    total.innerHTML = '';
    
    while (llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }
})

function calcularCuota(monto, interes, tiempo){

    while(llenarTabla.firstChild){
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let fechas = [];
    let mes_actual = moment(Date.now());
    mes_actual.add(1, 'month');
    let montoInicial = parseFloat(monto);
    let pagoInteres = 0, pagoCapital = 0, cuota = 0, totalPrestamo = 0, totalInteres = 0;

    //metodo de amortizacion frances para calculo de prestamos
    cuota = monto * (Math.pow(1+interes/100, tiempo)*interes/100)/(Math.pow(1+interes/100, tiempo)-1);

    for(let i = 1; i <= tiempo; i++) {

        pagoInteres = parseFloat(monto*(interes/100));
        pagoCapital = cuota - pagoInteres;
        monto = parseFloat(monto - pagoCapital);

        //Formato fechas
        fechas[i] = mes_actual.format('DD-MM-YYYY');
        mes_actual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fechas[i]}</td>
            <td>${cuota.toFixed(2)}</td>
            <td>${pagoCapital.toFixed(2)}</td>
            <td>${pagoInteres.toFixed(2)}</td>
            <td>${monto.toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row);
        totalInteres += pagoInteres;
    }

    totalPrestamo = montoInicial + totalInteres;
    total.innerHTML = `
        Pago total de prestamo: <b>$${totalPrestamo.toFixed(2)}</b>
        <br>Pago total de interes: <b>$${totalInteres.toFixed(2)}</b>`;
}
