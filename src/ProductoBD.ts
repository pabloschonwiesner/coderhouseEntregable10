import Producto from './Producto'

class ProductoBD {

  async getAll () {
    let prod = await Producto.find({})

    if(prod.length == 0) {
      console.log('no es array');
      
      return []
    }
    
    return prod;
  }

  async getOne ( id: number ) {
    return await Producto.findOne({ id })
    
  }

  async add ( producto: any ) {
    let nuevoProducto = new Producto( { title: producto.title, price: producto.price, thumbnail: producto.thumbnail })
    return await nuevoProducto.save() 
  }

  async update ( producto: any) {
    return await Producto.updateOne( { id: producto.id }, { title: producto.title, price: producto.price, thumbnail: producto.thumbnail })    
  }

  async delete ( id: number) {
    return await Producto.deleteOne( {id })
  }


}


export default ProductoBD