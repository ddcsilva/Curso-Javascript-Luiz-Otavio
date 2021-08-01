/*
Danilo Silva tem 31 anos, pesa 95 kg.
Ele tem 1.71 e seu IMC é de 32.488628979857054.
Danilo nasceu em 1990.
--
IMC = Peso / (Altura * Altura)
*/

const nome = 'Danilo';
const sobrenome = 'Silva';
const idade = 31;
const peso = 95;
const alturaEmM = 1.71;

let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2021 - idade;

// Template Strigs

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`Ele tem ${alturaEmM} e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);