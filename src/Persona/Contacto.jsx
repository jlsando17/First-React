import { Estado } from "../Conexion/Estado";


export class Contacto {
    name='Jose';
    lastName='Sandoval';
    email='jlsando';
    state= Estado.CONECTADO;

    constructor(name,lastName,email,state){
        this.name=name;
        this.lastName= lastName;
        this.email= email;
        this.state = state

    }
}