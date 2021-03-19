import Producto from './Producto'
const knexconfig = require('./config/knexConfigMysql.js')

const knex = require('knex')(knexconfig);

class ProductoBD {
  constructor () {
    knex.schema.hasTable('productos')
      .then( (exists: any) => {
        if(!exists) {
          knex.schema.createTable('productos', (table: any) => {
            table.increments()
            table.string('title', 50)
            table.float('price')
            table.string('thumbnail', 300)
          })
            .then(() => console.log('Tabla productos creada'))
            .catch((err: any) => console.log(err))
        }
      } )
  }

  getAll () {
    return knex('productos').select('*')
      .then( (productos: any ) => productos)
      .catch( () => [])
  }

  getOne ( id: number ) {
    return knex('productos').select({ id })
      .then ( (data: any) => data )
      .catch ( () => { throw Error('Producto no encontrado')} )
  }

  add ( producto: any ) {
    return new Promise((resolve, reject) => {
      let nuevoProducto = new Producto( 0, producto.title, producto.price, producto.thumbnail );    
      knex('productos').insert(nuevoProducto)
        .then( ( id: number ) => { resolve(id) })
        .catch( ( err: any ) => {
          console.log(err)
          reject(JSON.stringify({ error: 'Error no se pudo insertar el producto'}))          
        })
    })
  }

  update ( producto: any) {
    return new Promise((resolve, reject) => {
      let updateProducto = new Producto(+producto.id, producto.title, +producto.price, producto.thumbnail)
      knex('productos')
        .where({ id : producto.id })
        .update( updateProducto )
        .then( (data: any) => { console.log(data); resolve(updateProducto) })
        .catch ( (err: any) => reject(err) )
    })
  }

  delete ( id: number) {
    return new Promise((resolve, reject) => {
      knex('productos')
        .where({ id : id })
        .deñl()
        .then( (data: any) => { console.log(data); resolve(data) })
        .catch ( (err: any) => reject(err) )
    })
  }


}


export default ProductoBD