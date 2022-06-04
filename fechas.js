
// Fecha de hoy:
let hoy = new Date('June 4, 2022 18:40:00');

console.log(hoy);

// Fecha de nacimiento:
let nacimiento = new Date('March 1, 1995 03:30:00');
console.log(nacimiento);

// Comprobar si hoy es mayor que nacimiento:
if(hoy > nacimiento) {
    console.log("Verdadero");
}

let diaNacimiento = nacimiento.getDate();

console.log(diaNacimiento);

let mes = new Date('March 1, 1995 03:30:00');

let mesNacimiento = mes.getMonth();
console.log(mesNacimiento);

let year = mes.getFullYear();

console.log(year);