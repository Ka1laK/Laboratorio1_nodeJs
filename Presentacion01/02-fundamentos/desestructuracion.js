// definimos un objeto
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    // función que retorna un string
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

//console.log(deadpool.getNombre());


// segunda opcion

const deadpool2 = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// const nombre = deadpool2.nombre;
// const apellido = deadpool2.apellido;
// const poder = deadpool2.poder;
// // test 1
// console.log(nombre, apellido, poder);


// test 2
// const{apellido, nombre, poder} = deadpool2; // desestructuración de objetos
// console.log(nombre, apellido, poder);



// // test 3
// const{apellido, poder, nombre, edad = 20} = deadpool2; // desestructuración de objetos
// console.log(nombre, apellido, poder, edad);

// lo ideal es asignarlo dentro del objeto deadpool2

// const deadpool2 = {
//     nombre : 'Wade',
//     apellido : 'Winston',
//     poder : 'Regeneración',
//     edad : 20,
//     getNombre() {
//         return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
//     }
// }

function imprimeHeroe(heroe){
    const{apellido, poder, nombre, edad = 20} = heroe; // desestructuración de objetos
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool2);


function imprimeHeroe2({apellido, poder, nombre, edad = 20}){
    // tambien desde aqui se puede camibar los nombres de las variables
    nombre = 'Juan';
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe2(deadpool2);



// desestructuración de arreglos


const deadpool3 = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    edad : 20,
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}


function imprimeHeroe3({apellido, nombre, poder, edad =20}){
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}

const heroes = ['Deadpool', 'Superman', 'Batman'];
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];

console.log(h1, h2, h3);


// Ahora apliquemos la desestructuración al arreglo para obtener los valores

const deadpool4 = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    edad : 20,
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

function imprimeHeroe4({apellido, nombre, poder, edad =20}){
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad);
}

const herores4 = ['Deadpool', 'Superman', 'Batman'];

const [h4, h5, h6] = herores4;
console.log(h4, h5, h6);

// supongamos que solo le interesa el valor de la tercera posicion

const [, , h7] = herores4;
console.log(h7);