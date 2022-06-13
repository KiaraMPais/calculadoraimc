const validarAltura = altura => {
    if (altura === '') throw new Error('Debe ingresar un numero en la altura');
    if (altura === '0') throw new Error('La altura no puede ser cero');
    const alturaNumero = Number(altura);
    if (alturaNumero >= 272) throw new Error('La altura no puede ser mayor a 272cm');
    if (alturaNumero <= 10) throw new Error('La altura no puede ser menor a 10cm');
};

const validarPeso = peso => {
    if (peso === '') throw new Error('Debe ingresar un numero en el peso');
    if (peso === '0') throw new Error('El peso no puede ser cero');
    const pesoNumero = Number(peso);
    if (pesoNumero > 544) throw new Error('El peso no puede ser mayor a 544kg');
    if (pesoNumero < 2) throw new Error('El peso no puede ser menor a 2kg');
};

const mostrarColumnaTabla = imc => {
    const tabla = document.getElementById('tablaIMC');
    let columna = null;
    if(imc < 18.5)
    {
        EsconderTabla();
        columna = document.getElementById('pesoInferior');
    } 
    else if(imc >= 18.5 && imc < 24.9)
    {
        EsconderTabla();
        columna = document.getElementById('pesoNormal');
    }
    else if(imc >= 24.9 && imc < 29.9)
    {
        EsconderTabla();
        columna = document.getElementById('pesoSuperior');
    } 
    else if(imc >= 30)
    {
        EsconderTabla();
        columna = document.getElementById('pesoObesidad');
    }
    console.log(columna);

    tabla.classList.remove('visually-hidden');
    columna.classList.remove('visually-hidden');
};

function EsconderTabla()
{
    const tabla = document.getElementById('tablaIMC');
    const columna1 = document.getElementById('pesoInferior');
    const columna2 = document.getElementById('pesoNormal');
    const columna3 = document.getElementById('pesoSuperior');
    const columna4 = document.getElementById('pesoObesidad');
    tabla.classList.add('visually-hidden');
    columna1.classList.add('visually-hidden');
    columna2.classList.add('visually-hidden');
    columna3.classList.add('visually-hidden');
    columna4.classList.add('visually-hidden');
}

function CalculoFinal() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resutlado = document.getElementById('resultado');
    try {
        validarPeso(peso);
        validarAltura(altura);

        //Cuenta de IMC + redondeo:
        const alturaMetros = altura / 100;
        const division = peso / (alturaMetros * alturaMetros);
        const imcFinal = Math.round((division + Number.EPSILON) * 100) / 100;

        resutlado.value = imcFinal;
        mostrarColumnaTabla(imcFinal);
    } catch (e) {
        alert(e.message);
    }
};

const onLoadHandler = () => {
    esconderTabla();
};