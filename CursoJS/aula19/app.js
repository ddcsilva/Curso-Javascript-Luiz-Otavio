/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados
Referência (mutável) - array, object, function - Passados por referência
*/
const a = {
    nome: 'Danilo',
    sobrenome: 'Silva'
  };
  const b = a;
  
  b.nome = 'Danilo';
  console.log(a);
  console.log(b);