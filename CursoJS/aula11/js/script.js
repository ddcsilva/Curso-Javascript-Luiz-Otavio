let isValid = window.confirm('Deseja iniciar o cálculo?');

if (isValid) {
    let num1 = Number(prompt('Digite o número 1:'));
    let num2 = Number(prompt('Digita o número 2:'));
    
    const resultado = num1 + num2;
    
    alert(`O resultado do cálculo foi de ${resultado}`);
}