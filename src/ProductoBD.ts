import Producto from './Producto'

class ProductoBD {
  private productos: Producto[];
  constructor() {
    this.productos = []
  }

  getAll () {
    console.log('getAll')
    return this.productos
  }

  getOne ( id: number ) {
    let producto = this.productos.find( i => i.getId() == id)
    if(!producto) {
      throw Error('Producto no encontrado')
    }
    return producto
  }

  add ( producto: any ) {
    let nuevoId = 1

    if(this.productos.length > 0) {
      let ultimoProducto = this.productos[this.productos.length -1]
      nuevoId = ultimoProducto.getId() +1
    }

    let nuevoProducto = new Producto( nuevoId, producto.title, producto.price, producto.thumbnail );
    this.productos.push(nuevoProducto);
    return this.productos[this.productos.length -1]
  }

  update ( producto: any) {
    let updateProducto = new Producto(+producto.id, producto.title, +producto.price, producto.thumbnail)
    let index = this.productos.findIndex( i => i.getId() == updateProducto.getId())

    if(index < 0) {
      throw Error('No existe el producto a actualizar')
    }
    this.productos[index] = updateProducto
    return updateProducto
  }

  delete ( id: number) {
    let index = this.productos.findIndex( i => i.getId() == id )
    
    if(index < 0) {
      throw Error('No existe el producto a eliminar')
    }

    let deleteProducto = this.productos.splice(index, 1)
    return deleteProducto
  }


}


export default ProductoBD