import React from "react";
import "../hojas_de_estilo/LogoFrecodecamp.css"
import imagen_logo from "../imagenes/freecodecampLogo.jpg"

function LogoFreecodecamp(){
    return(
        <div className='contenedor_logo'>
            <img src={imagen_logo} className="img-logo" alt='logo-freecodecamp' />
        </div>
    );
}

export default LogoFreecodecamp