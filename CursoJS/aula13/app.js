let umaString = 'Um "texto"';
console.log(umaString);

umaString = "Um \"texto\"";
console.log(umaString);

umaString = "Um \\texto";
console.log(umaString);

umaString = 'Um texto';
console.log(umaString[4]);

console.log(umaString.charAt(4));

console.log(umaString.concat(' ', 'em', ' ', '2021'));

console.log(umaString + ' em 2021');

console.log(`${umaString} em 2021`);

console.log(umaString.indexOf('t'));

console.log(umaString.lastIndexOf('t'));

console.log(umaString.match(/[a-z]/g));

console.log(umaString.search(/x/));

console.log(umaString.replace('Um', 'Outro'));

console.log(umaString.length);

console.log(umaString.slice(3, 8));

console.log(umaString.slice(-5));

console.log(umaString.split(' '));

console.log(umaString.toUpperCase());

console.log(umaString.toLowerCase());