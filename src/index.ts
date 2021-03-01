import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import routes from './routes/index'
import ProductoBD from './ProductoBD'
import MensajeBD from './MensajeBD'

export let producto = new ProductoBD()
export let mensaje = new MensajeBD()

dotenv.config() 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.use('/api', routes)

// server socket.io
const server = require('http').createServer(app);
export const io = require('socket.io')(server);
require('./sockets/index')


server.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', (err: any) => { console.log(`Error de conexion: ${err}`)})

