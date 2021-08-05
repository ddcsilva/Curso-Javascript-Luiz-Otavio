window.onload = function () {
    const form = document.querySelector('#formularioImc');
    const divResult = document.querySelector('#resultado');

    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();

        const weigth = form.querySelector('#peso');
        const height = form.querySelector('#altura');

        if (validInput(weigth) && validInput(height)) {
            let imc = calcImc(weigth.value, height.value);
            let resultMessage;
            
            divResult.classList.remove('message-error');
            divResult.classList.add('success');

            if (imc < 18.5) {
                resultMessage = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultMessage = 'Peso normal';
            } else if (imc >= 25 && imc <= 29.9) {
                resultMessage = 'Sobrepeso';
            } else if (imc >= 30 && imc <= 34.9) {
                resultMessage = 'Obesidade I';
            } else if (imc >= 35 && imc <= 39.9) {
                resultMessage = 'Obesidade II';
            } else if (imc > 40) {
                resultMessage = 'Peso normal';
            } else {
                resultMessage = 'Houve um erro';
            }    

            divResult.innerHTML = `${resultMessage}`;
        } else {
            divResult.classList.remove('success');
            divResult.classList.add('message-error');
            divResult.innerHTML = 'Entrada inválida';
        }
    }

    function validInput(input) {
        if (!isNumber(input.value)) {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
            divResult.innerHTML = '';
            return true;
        }        
    }

    function isNumber(n) { 
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
    } 

    function calcImc(weight, height) {
        return (weight/height**2).toFixed(1);
    }

}