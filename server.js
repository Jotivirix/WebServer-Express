const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//Obtenemos el puerto
const port = process.env.PORT || 3000;

//Middleware --> callback que se ejecuta siempre
app.use(express.static(__dirname + '/public'));

//HBS - Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
 
app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'Jotivirix',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req,res) => {
    res.render('about');
})
 
app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto 3000')
});