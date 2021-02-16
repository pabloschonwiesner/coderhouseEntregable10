import express from 'express'
import producto from '../index'

const app = express()

app.set('view engine', 'pug')
app.set('views', __dirname)



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

app.get('/vista', (req, res) => {
  res.render('productos', { productos: producto.getAll() })
})

app.get('/nuevoProducto', (req, res) => {
  res.render('nuevoProducto', {producto: {id: undefined, title: '', price: 0, thumbnail: ''}, imagenes, filters: {
    'selectedOption': function() {}
  }})
})

app.get('/editarProducto/:id', (req, res) => {
  res.render('editarProducto', { producto: producto.getOne(+req.params.id), imagenes,  filters: { 'selectedOption': function (value: any, options: any) { 
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

export default app