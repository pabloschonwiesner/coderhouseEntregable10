const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const ProductoBD = require('./ProductoBD.js')
const MensajeBD = require('./MensajeBD.js')
const path = require('path')

require('core-js')
require('regenerator-runtime')


module.exports.producto = new ProductoBD()
module.exports.mensaje = new MensajeBD()

dotenv.config() 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.use('/api', routes)

// server socket.io
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/index')


server.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', err => { console.log(`Error de conexion: ${err}`)})

