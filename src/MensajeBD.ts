import Mensaje from './Mensaje'
const knexconfig = require('./config/knexConfigSqlite.js')

const knex = require('knex')(knexconfig);


class MensajeBD {
  constructor () {

    if(!knex.schema.hasTable('mensajes')) {
      knex.schema.createTableIfNotExists('mensajes', (table: any) => {
        table.string('email', 50)
        table.string('fechaHora', 50)
        table.string('mensaje', 350)
      })
        .then(() => console.log('Tabla mensajes creada'))
        .catch((err: any) => console.log(err))
    }
  }

  getAll () {
    return knex('mensajes').select('*')
      .then( (mensajes: any ) => mensajes)
      .catch( () => [])
  }

  add ( mensaje: any ) {
    return new Promise((resolve, reject) => {
      let nuevoMensaje = new Mensaje( mensaje.email, this.formatoDDMMYYYYHHMMSS(), mensaje.mensaje );
      knex('mensajes').insert(nuevoMensaje)
        .then( () => { resolve(nuevoMensaje) })
        .catch( ( err: any ) => {
          console.log(err)
          reject(JSON.stringify({ error: 'Error no se pudo insertar el mensaje'}))
          
        })
      

    })
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