let varA = 'A'; // A receba o valor de B
let varB = 'B'; // B receba o valor de C
let varC = 'C'; // C receba o valor de A

let aux;

console.log(varA, varB, varC);

aux = varA;
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);