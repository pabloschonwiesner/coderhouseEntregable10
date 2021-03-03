"use strict";

var express = require('express');

var producto = require('../index.js');

var handlebars = require('express-handlebars');

var app = express();
app.engine('hbs', handlebars({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: __dirname + '/layouts',
  partialsDir: __dirname + '/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname);
var imagenes = [{
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png",
  label: 'Calculadora'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/paint-color-pallete-brush-academy-512.png",
  label: 'Paleta colores'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-512.png",
  label: 'Globo terráqueo'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-512.png",
  label: 'Reloj'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-512.png",
  label: 'Pizarrón'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png",
  label: 'Cuaderno'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-512.png",
  label: 'Tubo ensayo'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/graduation-square-academic-cap-school-512.png",
  label: 'Sombrero egresado'
}, {
  path: "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-512.png",
  label: 'Mochila'
}];
app.get('/', (req, res) => {
  res.render('abmProductos', {
    productos: producto.getAll(),
    imagenes,
    helpers: {
      selectedOption: function selectedOption(value, options) {
        var items = '';
        imagenes.forEach(i => {
          if (i.path == value) {
            items = "".concat(items, "<option value=\"").concat(i.path, "\" selected>").concat(i.label, "</option>");
          } else {
            items = "".concat(items, "<option value=\"").concat(i.path, "\">").concat(i.label, "</option>");
          }
        });
        return items;
      }
    }
  });
});
module.exports = app;