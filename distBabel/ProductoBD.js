"use strict";

var Producto = require('./Producto.js');

class ProductoBD {
  constructor() {
    this.productos = [];
  }

  getAll() {
    return this.productos;
  }

  getOne(id) {
    var producto = this.productos.find(i => i.getId() == id);

    if (!producto) {
      throw Error('Producto no encontrado');
    }

    return producto;
  }

  add(producto) {
    var nuevoId = 1;

    if (this.productos.length > 0) {
      var ultimoProducto = this.productos[this.productos.length - 1];
      nuevoId = ultimoProducto.getId() + 1;
    }

    var nuevoProducto = new Producto(nuevoId, producto.title, producto.price, producto.thumbnail);
    this.productos.push(nuevoProducto);
    return this.productos[this.productos.length - 1];
  }

  update(producto) {
    var updateProducto = new Producto(+producto.id, producto.title, +producto.price, producto.thumbnail);
    var index = this.productos.findIndex(i => i.getId() == updateProducto.getId());

    if (index < 0) {
      throw Error('No existe el producto a actualizar');
    }

    this.productos[index] = updateProducto;
    return updateProducto;
  }

  delete(id) {
    var index = this.productos.findIndex(i => i.getId() == id);

    if (index < 0) {
      throw Error('No existe el producto a eliminar');
    }

    var deleteProducto = this.productos.splice(index, 1);
    return deleteProducto;
  }

}

module.exports = ProductoBD;