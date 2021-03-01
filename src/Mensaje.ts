
class Mensaje {
  private email: string;
  private fechaHora: string;
  private mensaje: string;

  constructor( email: string, fechaHora: string, mensaje: string) {
    this.email = email;
    this.fechaHora = fechaHora;
    this.mensaje = mensaje;
  }
}

export default Mensaje