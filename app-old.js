
const http = require('http');

http.createServer((req,res) => {

    res.writeHead(200, {'Content-Type':'application/json'});

    let salida = {
        nombre: 'Jose Ignacio',
        edad: 25,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log('Escuchando en 8080');