// concatenar variables
const nombre = 'Deadpool';
const real = 'Wade Winston';


// forma 1
const normal = nombre + ' ' + real;
console.log(normal);


const template = 'Fernando Herrera';
console.log(template)

// forma 2 (backticks)

const template_new = `${1+1} Fernando Herrera`;
console.log(template_new)


// forma 3
const template_new2 = `${nombre} ${real}`;
console.log(template_new2)
console.log(normal == template_new2)

// variable backtick llamada html

const html = `
<h1>Hola</h1>
<p>Mundo</p>`;

console.log(html)