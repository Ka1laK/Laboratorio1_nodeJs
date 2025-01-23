const fs = require('fs');
const path = require('path');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = true, hasta = 10) => {
    try {
        console.clear();

        let salida = '';
        let salidaConColores = '';

        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            salidaConColores += `${base.toString().yellow} ${'x'.green} ${i.toString().yellow} ${'='.green} ${base * i}\n`; // Con colores (para la consola)
        }

        
        if (listar) {
            console.log('==============='.green);
            console.log(`  Tabla del: ${base}`.blue);
            console.log('==============='.green);
            console.log(salidaConColores);
        }

        const filePath = path.join(__dirname, '../salida', `tabla-del-${base}.txt`);
        fs.writeFileSync(filePath, salida);

        return `Archivo creado: ${filePath}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
