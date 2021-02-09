let form = document.querySelector('#form')
let title = document.querySelector('#title')
let price = document.querySelector('#price')
let thumbnail = document.querySelector('#thumbnail')
let eliminar = document.querySelector('#eliminar')
let id;


window.addEventListener('DOMContentLoaded', iniciar)

async function iniciar () {

  let urlString = window.location.href
  let url = new URL(urlString)
  let ultimoParam = url.pathname.split('/')[url.pathname.split('/').length -1]


  if(!isNaN(ultimoParam)) {
    id = Number(ultimoParam)
  }

  if(form) {
    form.addEventListener('submit', sendData)
  }

  if(eliminar) {
    eliminar.addEventListener('click', eliminarProducto)
  }
}

function sendData (event) {
  event.preventDefault()
  let body, url;

  if(id) {
    url = `http://localhost:8080/api/productos/${id}`
    body = JSON.stringify({id, title: title.value, price: price.value, thumbnail: thumbnail.value})
  } else {
    url = `http://localhost:8080/api/productos`
    body = JSON.stringify({title: title.value, price: price.value, thumbnail: thumbnail.value})
  }

  fetch(url, { 
    method: id ? 'PUT' : 'POST', 
    headers: {'Content-Type': 'application/json'}, 
    body})
  .then( () => document.location.href = 'http://localhost:8080/productos/vista')
}

function eliminarProducto () {
  fetch(`http://localhost:8080/api/productos/${id}`, {method: 'DELETE'})
  .then( () => document.location.href = 'http://localhost:8080/productos/vista')
}

