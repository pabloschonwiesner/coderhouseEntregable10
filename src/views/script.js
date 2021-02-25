let form = document.querySelector('#form')
let title = document.querySelector('#title')
let price = document.querySelector('#price')
let thumbnail = document.querySelector('#thumbnail')
let tbody = document.querySelector('tbody')

form.addEventListener('submit', sendData)

function sendData (event) {
  event.preventDefault()
  socket.emit('agregarProducto', JSON.stringify({title: title.value, price: price.value, thumbnail: thumbnail.value}))
  // let body, url;

  // if(id) {
  //   url = `http://localhost:8080/api/productos/${id}`
  //   body = JSON.stringify({id, title: title.value, price: price.value, thumbnail: thumbnail.value})
  // } else {
  //   url = `http://localhost:8080/api/productos`
  //   body = JSON.stringify({title: title.value, price: price.value, thumbnail: thumbnail.value})
  // }

  // fetch(url, { 
  //   method: id ? 'PUT' : 'POST', 
  //   headers: {'Content-Type': 'application/json'}, 
  //   body})
  // .then( () => document.location.href = 'http://localhost:8080/productos/vista')
}

function crearRegistroTabla ( producto ) {
  console.log(producto.title)
  let tr = document.createElement('tr')
  tr.appendChild(crearColumnaTabla(producto.title))
  tr.appendChild(crearColumnaTabla(producto.price))
  tr.appendChild(crearColumnaTabla(producto.thumbnail))
  tr.appendChild(botonEditar())
  tbody.appendChild(tr)
}

function crearColumnaTabla ( valor ) {
  let td = document.createElement('td')
  if(valor.includes('http')) {
    let img = document.createElement('img')
    img.src = valor
    img.className = "rounded"
    img.width = "50"
    img.height = "50"
    td.appendChild(img)
  } else {
    td.innerText = valor
  }
  return td
}

function botonEditar () {
  let td = document.createElement('td')
  let svg = document.createElement('svg')
  let path = document.createElement('path')

  svg.xmlns = "http://www.w3.org/2000/svg"
  svg.width = "16"
  svg.height = "16"
  svg.fill = "currentColor"
  svg.className = "bi bi-pencil-fill"
  svg.viewBox = "0 0 16 16"

  path.d = "M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
  svg.appendChild(path)
  td.appendChild(svg)


  return td
}


let socket = io()

socket.on('connect', () => {
  console.log('conectado')
  socket.on('disconnect', () => {
    console.log('desconectado')
  })
  
  socket.on('productos', (data) => {
    console.log(data)
    let productos = JSON.parse(data)
    productos.forEach( producto => crearRegistroTabla(producto))
  })

  socket.on('productoAgregado', (data) => {
    console.log(JSON.parse(data))
    crearRegistroTabla(JSON.parse(data))
  })
})





