"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensaje = function Mensaje(email, fechaHora, mensaje) {
  _classCallCheck(this, Mensaje);

  this.email = email;
  this.fechaHora = fechaHora;
  this.mensaje = mensaje;
};

module.exports = Mensaje;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mensaje = require('./Mensaje.js');
var fs = require('fs');

var MensajeBD = function () {
  function MensajeBD() {
    _classCallCheck(this, MensajeBD);

    this.mensajes = [];
  }

  _createClass(MensajeBD, [{
    key: 'getAll',
    value: function getAll() {
      return this.mensajes;
    }
  }, {
    key: 'add',
    value: function add(mensaje) {
      var nuevoMensaje = new Mensaje(mensaje.email, this.formatoDDMMYYYYHHMMSS(), mensaje.mensaje);
      this.messageToFile(nuevoMensaje);
      return nuevoMensaje;
    }
  }, {
    key: 'messageToFile',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mensaje) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fs.promises.appendFile(__dirname + '/mensajes.txt', JSON.stringify(mensaje, null, '\t'), 'utf-8');

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function messageToFile(_x) {
        return _ref.apply(this, arguments);
      }

      return messageToFile;
    }()
  }, {
    key: 'formatoDDMMYYYYHHMMSS',
    value: function formatoDDMMYYYYHHMMSS() {
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1;
      var anio = fecha.getFullYear();
      var hora = fecha.getHours();
      var minutos = fecha.getMinutes();
      var segundos = fecha.getSeconds();

      var diaTexto = '';
      var mesTexto = '';
      var horaTexto = '';
      var minutosTexto = '';
      var segundosTexto = '';

      if (dia < 10) diaTexto = '0';
      if (mes < 10) mesTexto = '0';
      if (hora < 10) horaTexto = '0';
      if (minutos < 10) minutosTexto = '0';
      if (segundos < 10) segundosTexto = '0';

      diaTexto += dia.toString();
      mesTexto += mes.toString();
      horaTexto += hora.toString();
      minutosTexto += minutos.toString();
      segundosTexto += segundos.toString();

      return diaTexto + '/' + mesTexto + '/' + anio.toString() + ' ' + horaTexto + ':' + minutosTexto + ':' + segundosTexto;
    }
  }]);

  return MensajeBD;
}();

module.exports = MensajeBD;
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Producto = function () {
  function Producto(id, title, price, thumbnail) {
    _classCallCheck(this, Producto);

    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  _createClass(Producto, [{
    key: "getId",
    value: function getId() {
      return this.id;
    }
  }]);

  return Producto;
}();

module.exports = Producto;
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Producto = require('./Producto.js');

var ProductoBD = function () {
  function ProductoBD() {
    _classCallCheck(this, ProductoBD);

    this.productos = [];
  }

  _createClass(ProductoBD, [{
    key: 'getAll',
    value: function getAll() {
      return this.productos;
    }
  }, {
    key: 'getOne',
    value: function getOne(id) {
      var producto = this.productos.find(function (i) {
        return i.getId() == id;
      });
      if (!producto) {
        throw Error('Producto no encontrado');
      }
      return producto;
    }
  }, {
    key: 'add',
    value: function add(producto) {
      var nuevoId = 1;

      if (this.productos.length > 0) {
        var ultimoProducto = this.productos[this.productos.length - 1];
        nuevoId = ultimoProducto.getId() + 1;
      }

      var nuevoProducto = new Producto(nuevoId, producto.title, producto.price, producto.thumbnail);
      this.productos.push(nuevoProducto);
      return this.productos[this.productos.length - 1];
    }
  }, {
    key: 'update',
    value: function update(producto) {
      var updateProducto = new Producto(+producto.id, producto.title, +producto.price, producto.thumbnail);
      var index = this.productos.findIndex(function (i) {
        return i.getId() == updateProducto.getId();
      });

      if (index < 0) {
        throw Error('No existe el producto a actualizar');
      }
      this.productos[index] = updateProducto;
      return updateProducto;
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      var index = this.productos.findIndex(function (i) {
        return i.getId() == id;
      });

      if (index < 0) {
        throw Error('No existe el producto a eliminar');
      }

      var deleteProducto = this.productos.splice(index, 1);
      return deleteProducto;
    }
  }]);

  return ProductoBD;
}();

module.exports = ProductoBD;
'use strict';

var Router = require('express');
var producto = require('../index');

var router = Router();

router.get('/productos', function (req, res) {
  try {
    res.status(200).json(producto.getAll());
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get('/productos/:id', function (req, res) {
  try {
    res.status(200).json(producto.getOne(+req.params.id));
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post('/productos', function (req, res) {
  try {
    console.log(req.body);
    if (!req.body.title && req.body.title == '') {
      throw Error('Falta el titulo del producto');
    }

    res.status(200).json(producto.add(req.body));
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Error' });
  }
});

router.put('/productos/:id', function (req, res) {
  try {
    res.status(200).json(producto.update(req.body));
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Error' });
  }
});

router.delete('/productos/:id', function (req, res) {
  try {
    res.status(200).json(producto.delete(+req.params.id));
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Error' });
  }
});

module.exports = router;
'use strict';

var _require = require('./../index.js'),
    producto = _require.producto,
    mensaje = _require.mensaje,
    io = _require.io;

io.on('connection', function (client) {
  console.log('cliente conectado');
  io.on('disconnect', function () {
    console.log('cliente desconectado');
  });

  client.on('agregarProducto', function (data) {
    var productoAgregado = producto.add(JSON.parse(data));
    io.sockets.emit('productoAgregado', JSON.stringify(productoAgregado));
  });

  client.on('message', function (data) {
    var mensajeAgregado = mensaje.add(data);
    io.sockets.emit('message', mensajeAgregado);
  });

  function emitirListaProductos() {
    var listaProductos = JSON.stringify(producto.getAll());
    client.emit('productos', listaProductos);
  }

  emitirListaProductos();
});
'use strict';

var express = require('express');
var producto = require('../index.js');
var handlebars = require('express-handlebars');

var app = express();

app.engine('hbs', handlebars({ extname: '.hbs', defaultLayout: 'index.hbs', layoutsDir: __dirname + '/layouts', partialsDir: __dirname + '/partials' }));
app.set('view engine', 'hbs');
app.set('views', __dirname);

var imagenes = [{ path: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png", label: 'Calculadora' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/paint-color-pallete-brush-academy-512.png", label: 'Paleta colores' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-512.png", label: 'Globo terráqueo' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-512.png", label: 'Reloj' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-512.png", label: 'Pizarrón' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png", label: 'Cuaderno' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-512.png", label: 'Tubo ensayo' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/graduation-square-academic-cap-school-512.png", label: 'Sombrero egresado' }, { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-512.png", label: 'Mochila' }];

app.get('/', function (req, res) {
  res.render('abmProductos', { productos: producto.getAll(), imagenes: imagenes, helpers: { selectedOption: function selectedOption(value, options) {
        var items = '';

        imagenes.forEach(function (i) {
          if (i.path == value) {
            items = items + '<option value="' + i.path + '" selected>' + i.label + '</option>';
          } else {
            items = items + '<option value="' + i.path + '">' + i.label + '</option>';
          }
        });
        return items;
      }
    } });
});

module.exports = app;
'use strict';

var form = document.querySelector('#form');
var title = document.querySelector('#title');
var price = document.querySelector('#price');
var thumbnail = document.querySelector('#thumbnail');
var tbody = document.querySelector('tbody');

var chat = document.querySelector('#chat');
var email = document.querySelector('#email');
var message = document.querySelector('#message');
var enviarMensaje = document.querySelector('#enviarMensaje');
var lista = document.querySelector('#lista');

form.addEventListener('submit', sendData);
email.addEventListener('input', validarEmail);
enviarMensaje.addEventListener('click', sendMessage);

function sendData(event) {
  event.preventDefault();
  socket.emit('agregarProducto', JSON.stringify({ title: title.value, price: price.value, thumbnail: thumbnail.value }));
}

function sendMessage(event) {
  event.preventDefault();
  socket.emit('message', {
    email: email.value,
    mensaje: message.value
  });
  message.value = '';
}

function crearRegistroTabla(producto) {
  var tr = document.createElement('tr');
  tr.appendChild(crearColumnaTabla(producto.title));
  tr.appendChild(crearColumnaTabla(producto.price));
  tr.appendChild(crearColumnaTabla(producto.thumbnail));
  tr.appendChild(botonEditar());
  tbody.appendChild(tr);
}

function crearColumnaTabla(valor) {
  var td = document.createElement('td');
  if (valor.includes('http')) {
    var img = document.createElement('img');
    img.src = valor;
    img.className = "rounded";
    img.width = "50";
    img.height = "50";
    td.appendChild(img);
  } else {
    td.innerText = valor;
  }
  return td;
}

function botonEditar() {
  var td = document.createElement('td');
  var svg = document.createElement('svg');
  var path = document.createElement('path');

  svg.xmlns = "http://www.w3.org/2000/svg";
  svg.width = "16";
  svg.height = "16";
  svg.fill = "currentColor";
  svg.className = "bi bi-pencil-fill";
  svg.viewBox = "0 0 16 16";

  path.d = "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z";
  svg.appendChild(path);
  td.appendChild(svg);

  return td;
}

function validarEmail() {
  var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (format.test(email.value)) {
    enviarMensaje.disabled = false;
  } else {
    enviarMensaje.disabled = true;
  }
}

function crearMensaje(mensaje) {
  console.log({ mensaje: mensaje });
  var li = document.createElement('li');
  var spanEmail = document.createElement('span');
  var spanFechaHora = document.createElement('span');
  var spanMensaje = document.createElement('span');

  spanEmail.innerText = mensaje.email;
  spanEmail.className = 'emailStyle';
  spanFechaHora.innerText = mensaje.fechaHora;
  spanFechaHora.className = 'fechaHoraStyle';
  spanMensaje.innerText = mensaje.mensaje;
  spanMensaje.className = 'mensajeStyle';

  li.appendChild(spanEmail);
  li.appendChild(spanFechaHora);
  li.appendChild(spanMensaje);

  lista.appendChild(li);
}

var socket = io();
var sessionID = null;

socket.on('connect', function () {
  console.log('conectado');

  socket.on('disconnect', function () {
    console.log('desconectado');
  });

  socket.on('productos', function (data) {
    var productos = JSON.parse(data);
    productos.forEach(function (producto) {
      return crearRegistroTabla(producto);
    });
  });

  socket.on('productoAgregado', function (data) {
    crearRegistroTabla(JSON.parse(data));
  });

  socket.on('message', function (data) {
    crearMensaje(data);
  });
});
