import React from "react";
import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import "../hojas_de_estilo/Formulario.css"

function Formulario(props){

    const [input, setInput] = useState("");

    const ManejarCambio = e =>{
        setInput(e.target.value);
    };

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id:uuidv4(),
            texto:input,
            completa: false
        };
    
    props.onSubmit(tareaNueva);
    }

    return(
        <form className="formulario" onSubmit={manejarEnvio}>
            
            <input className="texto_input" 
            placeholder="Escribe una tarea" 
            type="text" 
            name="texto" 
            onChange={ManejarCambio}></input>
            
            <button className="boton_agregar_tarea">Agregar Tarea</button>
        </form>
    )
}

export default Formulario;