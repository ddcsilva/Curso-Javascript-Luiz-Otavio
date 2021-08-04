window.onload = function () {
    const form = document.querySelector('#formularioImc');
    const divSuccess = document.querySelector('#resultado');

    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();

        const weigth = form.querySelector('#peso');
        const height = form.querySelector('#altura');

        if (validInput(weigth) && validInput(height)) {
            let imc = calcImc(weigth.value, height.value);
            
            divSuccess.classList.add('success');
            divSuccess.innerHTML += `IMC ${imc}`;
        } else {
            divSuccess.classList.remove('success');
            divSuccess.innerHTML = '';
        }
    }

    function validInput(input) {
        if (!isNumber(input.value)) {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
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