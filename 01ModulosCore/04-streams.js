var fs = require('fs'),
    readStream = fs.createReadStream('nombres.txt'),
    writeStream = fs.createWriteStream('nombres_copia.txt')


// Con el método pipe podremos comenzar a leer/escribir ficheros
// Es como vimos en SI con el stdin/stdout, en redirecciones y tuberías
readStream.pipe(writeStream) // Abrirá un canal en el cual se escribirá un nuevo objeto


