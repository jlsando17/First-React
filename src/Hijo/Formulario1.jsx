
import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../Persona/Contacto';


const Formulario1Componente = ({Formulario1}) => {
    return (
        <div>
           <h2>
               Nombre: { Formulario1.name}
           </h2>
           <h2>
               Apellido: { Formulario1.lastName}
           </h2>
           <h2>
               Email: { Formulario1.email}
           </h2>
           <h2>
               Estado: { Formulario1.state}
           </h2>
            
        </div>
    );
};


Formulario1Componente.propTypes = {
    Formulario1: PropTypes.instanceOf(Contacto)
};


export default Formulario1Componente;
