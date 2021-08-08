// Função Construtora
// 01/01/1970 -> Marco Zero - Timestamp Unix

const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
let data = new Date(0 + tresHoras + umDia);
console.log(data.toString())

// Pelo menos dois parâmetros, sendo ano e mês
// A, M, D, h, m, s, ms
const novaData = new Date(2021, 07, 06, 15, 14, 27, 999); // Mês inicia no zero
console.log(novaData.toString())

const dataString = new Date('2021-08-04 20:20:59');
console.log(dataString.toString())

data = new Date();

console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1); // Mês começa do zero
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Minuto: ', data.getMinutes());
console.log('Segundo: ', data.getSeconds());
console.log('Milisegundo: ', data.getMilliseconds());
console.log('Dia da Semana: ', data.getDay()); // 0 - Domingo, 6 - Sábado
console.log(data.toString()); // Milésimos de segundos desde o início

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);