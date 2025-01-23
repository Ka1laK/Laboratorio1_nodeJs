// Hacer la tabla del X en JavaScript
const path = require('path');
const { crearArchivo } = require(path.join(__dirname, 'helper', 'multiplicar.js'));
const argv = require(path.join(__dirname, 'config', 'yargs.js'));
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch( err => console.log(err));

