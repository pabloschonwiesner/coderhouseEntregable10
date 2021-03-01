import { producto, mensaje, io} from './../index'

io.on('connection', (client: any) => {
  console.log('cliente conectado')
  io.on('disconnect', () => {
    console.log('cliente desconectado')
  })

  client.on('agregarProducto', (data: any) => {
    let productoAgregado = producto.add(JSON.parse(data))
    io.sockets.emit('productoAgregado', JSON.stringify(productoAgregado))
    
  })

  client.on('message', (data: any) => {
    let mensajeAgregado = mensaje.add(data)
    io.sockets.emit('message', mensajeAgregado)
  })

  function emitirListaProductos() {
    let listaProductos = JSON.stringify(producto.getAll())
    client.emit('productos', listaProductos)
  }

  emitirListaProductos()
})