const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const pesoValue = Number(inputPeso.value);
    const alturaValue = Number(inputAltura.value);

    if (!pesoValue) {
        setResult('Peso inválido', false);
        return;
    }

    if (!alturaValue) {
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(pesoValue, alturaValue);
    const imcLevel = getImcLevel(imc);

    const message = `Seu IMC é ${imc} (${imcLevel})`

    setResult(message, true);
});

function getImcLevel(imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade I', 'Obesidade II'];

    if (imc >= 39.9) return level[5];
    if (imc >= 34.9) return level[4];
    if (imc >= 29.9) return level[3];
    if (imc >= 24.9) return level[2];
    if (imc >= 18.5) return level[1];
    if (imc < 18.5) return level[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function createTagP() {
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector('#resultado');
    const p = createTagP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    result.innerHTML = '';
    p.innerHTML = message;
    result.appendChild(p);
}