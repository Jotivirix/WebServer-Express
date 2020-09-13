
const hbs = require('hbs');

let name = 'Jotivirix';
//Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('getName', () => {
    return name;
})