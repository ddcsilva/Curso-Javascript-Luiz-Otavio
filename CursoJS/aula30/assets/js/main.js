const container = document.querySelector('.container');
const h1 = container.querySelector('h1');
const today = new Date();

const dayName = new Array ('domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado');
const monthName = new Array ('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  }

h1.innerHTML = `${dayName[today.getDay()]}, ${today.getDate()} de ${monthName[today.getMonth()]} de ${today.getFullYear()} ${zeroAEsquerda(today.getHours())}:${zeroAEsquerda(today.getMinutes())}`;