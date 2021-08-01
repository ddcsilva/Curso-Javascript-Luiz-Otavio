/**
 * Aritméticos
 * +  -> Adição / Concatenação
 * -  -> Subtração
 * *  -> Multiplicação
 * /  -> Divisão
 * ** -> Potencialização
 * %  -> Resto
 * ++ -> Incrementa
 * -- -> Decrementa
 * NaN (Not a Number)
 * parseInt (Converte para Inteiro)
 * parseFloat (Converte para Ponto Flutuante)
 */

const num1 = 5;
const num2 = 10;
const num3 = 2;

let contador = 1;

console.log('Adição:', num1 + num2);
console.log('Subtração:', num1 - num2);
console.log('Multiplicação:', num1 * num2);
console.log('Divisão:', num1 / num2);
console.log('Potencialização:', num1 ** num2);
console.log('Resto: ', num1 % num2);

console.log('Parênteses:', num1 + (num2 + num3));

console.log('Contador:', contador);
contador++;
console.log('Contador com Incremento:', contador);
contador--;
console.log('Contador com decremento:', contador);

console.log('NaN:', num1 * 'Danilo');

console.log('Conversão para Inteiro: ' + parseInt('10'));
console.log('Conversão para Ponto Flutuante: ' + parseFloat('10.5'));