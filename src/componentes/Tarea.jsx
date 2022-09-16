import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "../hojas_de_estilo/Tarea.css"

function Tarea({id, texto, completa, completarTarea, eliminarTarea}){

    return(
        <div className={completa? "tarea_contenedor tarea_completa":"tarea_contenedor"}>
            <p className="texto_tarea" 
                onClick={()=>completarTarea(id)}>{texto}
            </p>
            <div className="tarea_contenedor_iconos">
                <AiOutlineCloseCircle className="icono"
                    onClick={()=>eliminarTarea(id)}/>
            </div>
        </div>
    )
}

export default Tarea