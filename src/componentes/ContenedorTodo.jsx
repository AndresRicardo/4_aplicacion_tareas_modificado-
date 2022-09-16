import React from "react";
import Formulario from "./Formulario.jsx"
import Tarea from "./Tarea.jsx"
import "../hojas_de_estilo/ContenedorTodo.css"
import {useState} from "react"


function ContenerdorTodo(){

    const[tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(elem => elem.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(e => {
            if(e.id === id) {
                e.completa = !e.completa;
            }
            return e;
        })
        
        setTareas(tareasActualizadas);        
    };

    return (
    <div className="contenedor_todo">
        <h1> Mis Tareas</h1>
        <Formulario onSubmit={agregarTarea}/>

        <div className="tareas_lista_contenedor">
            {tareas.map((tarea) => 
                <Tarea 
                key = {tarea.id}
                id = {tarea.id}
                texto={tarea.texto}
                completa={tarea.completa}
                eliminarTarea = {eliminarTarea} 
                completarTarea = {completarTarea}/>
            )}

        </div>
    </div>
    );
}

export default ContenerdorTodo