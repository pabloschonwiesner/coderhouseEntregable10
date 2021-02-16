import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import routes from './routes/index'
import views from './views/index'
import ProductoBD from './ProductoBD'

let producto = new ProductoBD()


dotenv.config() 
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/views'))


app.use('/productos', views)
app.use('/api', routes)


let server = app.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', (err) => { console.log(`Error de conexion: ${err}`)})

export default producto