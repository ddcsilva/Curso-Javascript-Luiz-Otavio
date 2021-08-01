let num1 = 9.54578;

console.log(Math.floor(num1)); // Arredonda para baixo
console.log(Math.ceil(num1));  // Arredonda para cima
console.log(Math.round(num1)); // Arredonda para o mais próximo

console.log(Math.max(3, 4, 5, 6, 77, 865, 78765, 7, 2, 8, 9)) // Encontra o maior número
console.log(Math.min(3, 4, 5, 6, 77, 865, 78765, 7, 2, 8, 9)) // Encontra o menor número

let aleatorio = Math.random(); // Gera um número aleatório com várias casas decimais

aleatorio = Math.round(aleatorio * (10 - 5) + 5); // Número aleatório entre 10 e 5

console.log(aleatorio);

console.log(Math.PI);
console.log(Math.pow(2, 10));
console.log(2 ** 10);