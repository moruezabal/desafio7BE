import moment from 'moment'


moment.locale('es');

let today = moment();

let birthday = moment("19890908");

console.log("Hoy es " + today.format('l'));
console.log("Nací el " + birthday.format('l'));
console.log("Desde mi nacimiento pasaron " + birthday.fromNow(true));
console.log("Desde mi nacimiento pasaron " + today.diff(birthday,'days') + " días");

