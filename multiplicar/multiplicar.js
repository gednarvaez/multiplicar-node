const fs = require('fs');



let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            return reject(`El valor ${base}, no es un número`);
        }
        let data = "";
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${i * base}\n`;
        }

        fs.writeFile(`tabla-${base}.txt`, data, (err) => {
            if (err) 
                reject (err);
            else 
                resolve(`tabla-${base}.txt`)            
        });

    });
     
}
module.exports = {crearArchivo};