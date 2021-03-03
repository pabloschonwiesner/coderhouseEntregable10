const Mensaje = require('./Mensaje.js')
const fs = require('fs')

class MensajeBD {
  constructor() {
    this.mensajes = []
  }

  getAll () {
    return this.mensajes
  }

  add ( mensaje ) {
    let nuevoMensaje = new Mensaje( mensaje.email, this.formatoDDMMYYYYHHMMSS(), mensaje.mensaje );
    this.messageToFile(nuevoMensaje);
    return nuevoMensaje
  }

  async messageToFile ( mensaje ) {
    await fs.promises.appendFile(`${__dirname}/mensajes.txt`, JSON.stringify(mensaje, null, '\t'), 'utf-8')
    
  }

  formatoDDMMYYYYHHMMSS () {
    let fecha = new Date()
    let dia = fecha.getDate()
    let mes = fecha.getMonth() + 1
    let anio = fecha.getFullYear()
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    let diaTexto = ''
    let mesTexto = ''
    let horaTexto = ''
    let minutosTexto = ''
    let segundosTexto = ''

    if(dia < 10) diaTexto = '0' 
    if(mes < 10) mesTexto = '0'
    if(hora < 10) horaTexto = '0'
    if(minutos < 10) minutosTexto = '0'
    if(segundos < 10) segundosTexto = '0'

    diaTexto += dia.toString()
    mesTexto += mes.toString()
    horaTexto += hora.toString()
    minutosTexto += minutos.toString()
    segundosTexto += segundos.toString()

    return diaTexto + '/' + mesTexto + '/' + anio.toString() + ' ' + horaTexto + ':' + minutosTexto + ':' + segundosTexto
  }
}


module.exports = MensajeBD