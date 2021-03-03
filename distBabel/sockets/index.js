"use strict";

var {
  producto,
  mensaje,
  io
} = require('./../index.js');

io.on('connection', client => {
  console.log('cliente conectado');
  io.on('disconnect', () => {
    console.log('cliente desconectado');
  });
  client.on('agregarProducto', data => {
    var productoAgregado = producto.add(JSON.parse(data));
    io.sockets.emit('productoAgregado', JSON.stringify(productoAgregado));
  });
  client.on('message', data => {
    var mensajeAgregado = mensaje.add(data);
    io.sockets.emit('message', mensajeAgregado);
  });

  function emitirListaProductos() {
    var listaProductos = JSON.stringify(producto.getAll());
    client.emit('productos', listaProductos);
  }

  emitirListaProductos();
});