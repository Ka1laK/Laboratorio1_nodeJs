// callback

/* 
Estructura 
setTimeout(arg1, arg2)

arg1 ==> funcion a manejar
arg2 ==> tiempo en milisegundos que debe esperar para ejecutar la funcion
*/

// setTimeout(function(){
//     console.log('Hola Mundo');
// }, 1000);

// const getUsuarioByID = (id) => {
//     const usuario = {
//         id,
//         nombre: 'Fernando'
//     }

//     setTimeout(() => {
//         console.log(usuario);
//     }, 1500);
// }

// getUsuarioByID(10);



// const getUsuarioByID = (id, callback) => {
//     const usuario = {
//         id,
//         nombre : 'Fernando'
//     }

//     setTimeout(() => {
//         callback(usuario)
//     }, 1500);
// }

// getUsuarioByID(10, () => {
//     console.log('Hola Mundo');
// });



const getUsuarioByID = (id, callback) => {
    const usuario = {
        id, 
        nombre : 'Fernando'
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)
}


getUsuarioByID(10, (user) => {
    console.log(user.id);
    console.log(user.nombre.toUpperCase());
});

// problemas comunes con los callbacks

// 1. Callback Hell