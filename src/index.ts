import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import handlebars from 'express-handlebars'

import ProductoBD from './ProductoBD'

dotenv.config() 
const app = express()
const router = express.Router()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.engine('hbs', handlebars({extname: '.hbs', defaultLayout: 'index.hbs', layoutsDir: __dirname + '/views/layouts', partialsDir: __dirname + '/views/partials'}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/views'))

let imagenes = [
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-512.png", label: 'Calculadora' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/paint-color-pallete-brush-academy-512.png", label: 'Paleta colores' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-512.png", label: 'Globo terráqueo' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/clock-stopwatch-timer-time-512.png", label: 'Reloj' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-512.png", label: 'Pizarrón' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-512.png", label: 'Cuaderno' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/tube-lab-science-school-512.png", label: 'Tubo ensayo' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/graduation-square-academic-cap-school-512.png", label: 'Sombrero egresado' },
  { path: "https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-512.png", label: 'Mochila' },
]


let producto = new ProductoBD()


router.get('/productos', (req, res) => {
  try {
    res.status(200).json(producto.getAll())
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.get('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.getOne(+req.params.id))
  } catch (err) { return res.status(500).json( { error: err.message })}
})

router.post('/productos', (req, res) => {
  try {    
    console.log(req.body)
    if(!req.body.title && req.body.title == '') {
      throw Error('Falta el titulo del producto')
    }

    res.status(200).json(producto.add(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.put('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.update(req.body))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

router.delete('/productos/:id', (req, res) => {
  try {
    res.status(200).json(producto.delete(+req.params.id))
  } catch (err) { return res.status(500).json({ error: err.message || 'Error'})}
})

app.get('/productos/vista', (req, res) => {
  res.render('productos', { productos: producto.getAll() })
})

app.get('/productos/nuevoProducto', (req, res) => {
  res.render('nuevoProducto', {imagenes})
})

app.get('/productos/editarProducto/:id', (req, res) => {
  res.render('editarProducto', { producto: producto.getOne(+req.params.id), imagenes,  helpers: { selectedOption: function (value: any, options: any) { 
    let items = ''
    
    imagenes.forEach( i => {
      if(i.path == value) {
        items = `${items}<option value="${i.path}" selected>${i.label}</option>`
      } else {
        items = `${items}<option value="${i.path}">${i.label}</option>`
      }
    })
    
    
      return items
    }
  }})
})

app.use('/api', router)



let server = app.listen( process.env.PORT, () => console.log(`Escuchando en el puerto ${process.env.PORT}`))

server.on('error', (err) => { console.log(`Error de conexion: ${err}`)})