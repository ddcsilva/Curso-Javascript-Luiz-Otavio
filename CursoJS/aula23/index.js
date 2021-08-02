/**
 * Valores Falsy
 * false
 * 0
 * ''
 * ""
 * ``
 * null
 * undefined
 * NaN
 */

console.log('Danilo' && 0 && 'Rosana'); // Retorna o valor que representa FALSE
console.log('Danilo' && true && 'Rosana'); // Retorna o último valor TRUE

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());

console.log(0 || false || null || 'Danilo' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);