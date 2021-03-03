"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mensaje = require('./Mensaje.js');

var fs = require('fs');

class MensajeBD {
  constructor() {
    this.mensajes = [];
  }

  getAll() {
    return this.mensajes;
  }

  add(mensaje) {
    var nuevoMensaje = new Mensaje(mensaje.email, this.formatoDDMMYYYYHHMMSS(), mensaje.mensaje);
    this.messageToFile(nuevoMensaje);
    return nuevoMensaje;
  }

  messageToFile(mensaje) {
    return _asyncToGenerator(function* () {
      yield fs.promises.appendFile("".concat(__dirname, "/mensajes.txt"), JSON.stringify(mensaje, null, '\t'), 'utf-8');
    })();
  }

  formatoDDMMYYYYHHMMSS() {
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

}

module.exports = MensajeBD;