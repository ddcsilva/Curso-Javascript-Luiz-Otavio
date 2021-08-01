// Declaração de Arrays
//              0         1         2
const alunos = ['Danilo', 'Rosana', 'Raquel'];

// Má prática
const arrayIncomum = ['Danilo', 1, true, null];

console.log(alunos);
console.log(alunos[1]);

alunos[1] = 'Katy';
console.log(alunos[1]);

alunos[3] = 'Luiz'; // Método 1 para adicionar item no array
console.log(alunos);

alunos.push('Daniel'); // Método 2 para adicionar item no array (Adiciona no Final do Array)
console.log(alunos);

alunos.unshift('Néia'); // Método 3 para adicionar item no array (Adiciona no Início do Array)
console.log(alunos);

console.log(alunos.pop(), 'removido'); // Método 1 para remover item no array (Remove no Final do Array)
console.log(alunos);

console.log(alunos.shift(), 'removido'); // Método 2 para remover item no array (Remove no Início do Array)
console.log(alunos);

delete alunos[1]; // Método 3 para remover item no array (Remove apenas o valor, tornando undefined)
console.log(alunos);

alunos.push('Celio');
alunos.push('Dorival');
alunos.push('João');
console.log(alunos);

console.log(alunos.slice(0, -2)); // Fatiar o Array, semelhante ao String

console.log(typeof alunos); // Tipo Object
console.log(alunos instanceof Array); // Instância de Array