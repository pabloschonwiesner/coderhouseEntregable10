"use strict";

class Producto {
  constructor(id, title, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  getId() {
    return this.id;
  }

}

module.exports = Producto;