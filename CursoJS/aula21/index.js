/**
 * Operadores de Comparação
 * > Maior que
 * >= Maior que ou Igual a
 * < Menor que
 * <= Menor que ou Igual a
 * == Igualdade (valor) -> Não recomendável
 * === igualdade estrita (valor e tipo)
 * != Diferente (valor) -> Não recomendável
 * !== Diferente estrito (valor e tipo)
 */

console.log(10 > 5);
console.log(10 >= 5);
console.log(10 >= 10);
console.log(10 >= 11);
console.log(10 <= 11);
console.log(12 <= 11);

const num1 = 10;
const num2 = '10';

console.log(num1 == num2);
console.log(num1 === num2);

console.log(num1 != num2);
console.log(num1 !== num2);