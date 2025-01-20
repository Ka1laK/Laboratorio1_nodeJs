var nombre = 'Wolverine'; // se usa var para declarar variables globales
console.log(nombre);

if (true) {
    //var nombre = 'Magneto'; // se reasigna la variable global
    let nombre = 'Magneto'; // se crea una variable local
    console.log(nombre);
}

console.log(nombre);

