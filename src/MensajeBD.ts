import Mensaje from './Mensaje'
import fs from 'fs'

class MensajeBD {
  private mensajes: Mensaje[];
  constructor() {
    this.mensajes = []
  }

  getAll () {
    return this.mensajes
  }

  add ( mensaje: any ) {
    let nuevoMensaje = new Mensaje( mensaje.email, this.formatoDDMMYYYYHHMMSS(), mensaje.mensaje );
    this.messageToFile(nuevoMensaje);
    return nuevoMensaje
  }

  async messageToFile ( mensaje: any) {
    await fs.promises.appendFile(`${__dirname}/mensajes.txt`, JSON.stringify(mensaje, null, '\t'), 'utf-8')
    
  }

  formatoDDMMYYYYHHMMSS () {
    let fecha = new Date()
    let dia: number = fecha.getDate()
    let mes: number = fecha.getMonth() + 1
    let anio: number = fecha.getFullYear()
    let hora: number = fecha.getHours()
    let minutos: number = fecha.getMinutes()
    let segundos: number = fecha.getSeconds()

    let diaTexto: string = ''
    let mesTexto: string = ''
    let horaTexto: string = ''
    let minutosTexto: string = ''
    let segundosTexto: string = ''

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


export default MensajeBD