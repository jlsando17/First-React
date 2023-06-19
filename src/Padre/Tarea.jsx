import React from 'react';
import { Estado} from '../Conexion/Estado'
import Formulario1Componente from '../Hijo/Formulario1';
import { Contacto} from '../Persona/Contacto'


const TareaComponent = () => {

   const Usuario = new Contacto('nombreDefault...', 'ApellidoDefaul...', 'emailDefault...', Estado.CONECTADO);

    return (
        <div>
            <div>
                Ejercicio
            </div>
             <Formulario1Componente Formulario1={Usuario}></Formulario1Componente>
             
        </div>
    );
};


export default TareaComponent;
