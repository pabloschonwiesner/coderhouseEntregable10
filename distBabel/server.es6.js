"use strict";

require("core-js/modules/es7.array.flat-map.js");

require("core-js/modules/es6.array.iterator.js");

require("core-js/modules/es6.array.sort.js");

require("core-js/modules/es7.object.define-getter.js");

require("core-js/modules/es7.object.define-setter.js");

require("core-js/modules/es7.object.lookup-getter.js");

require("core-js/modules/es7.object.lookup-setter.js");

require("core-js/modules/es7.promise.finally.js");

require("core-js/modules/es6.regexp.constructor.js");

require("core-js/modules/es6.regexp.flags.js");

require("core-js/modules/es6.regexp.match.js");

require("core-js/modules/es6.regexp.replace.js");

require("core-js/modules/es6.regexp.split.js");

require("core-js/modules/es6.regexp.search.js");

require("core-js/modules/es6.regexp.to-string.js");

require("core-js/modules/es6.symbol.js");

require("core-js/modules/es7.symbol.async-iterator.js");

require("core-js/modules/es7.string.trim-left.js");

require("core-js/modules/es7.string.trim-right.js");

require("core-js/modules/web.timers.js");

require("core-js/modules/web.immediate.js");

require("core-js/modules/web.dom.iterable.js");

var express = require('express');

var dotenv = require('dotenv');

var bodyParser = require('body-parser');

var routes = require('./routes/index');

var ProductoBD = require('./ProductoBD.js');

var MensajeBD = require('./MensajeBD.js');

var path = require('path');

require('regenerator-runtime');

module.exports.producto = new ProductoBD();
module.exports.mensaje = new MensajeBD();
dotenv.config();
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'));
});
app.use('/api', routes); // server socket.io

var server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);

require('./sockets/index');

server.listen(process.env.PORT, () => console.log("Escuchando en el puerto ".concat(process.env.PORT)));
server.on('error', err => {
  console.log("Error de conexion: ".concat(err));
});