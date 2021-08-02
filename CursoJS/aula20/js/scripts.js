const form = document.querySelector('#form');
const result = document.querySelector('#result');
const persons = [];

function submitForm(event) {
    event.preventDefault();

    const name = form.querySelector('#nome');
    const lastName = form.querySelector('#sobrenome');
    const weight = form.querySelector('#peso');
    const height = form.querySelector('#altura');

    persons.push({
        name: name.value,
        lastName: lastName.value,
        weight: weight.value,
        height: height.value
    });

    console.log(persons);

    result.innerHTML += `<strong>Nome:</strong> ${name.value} <br />
                         <strong>Sobrenome:</strong> ${lastName.value} <br />
                         <strong>Peso:</strong> ${weight.value} <br />
                         <strong>Altura:</strong> ${height.value}
                         <hr />`;
}

form.addEventListener('submit', submitForm);