import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import '../style/style.css'



export default function Tasca({ id, text, completada, eliminarTasca, completarTasca }) {
    const className = completada ? "tascaCompletada" : "";

    const handleCompletarClick = () => {
        completarTasca(id);
    };

    const handleEliminarClick = () => {
        eliminarTasca(id);
    };


    return (
        <div className="BloqueTarea">
            <div className={`Tarea ${className}`} onClick={handleCompletarClick}>
                <p>{text}</p>
            </div>
            <button type="button" onClick={handleEliminarClick}><TiDeleteOutline className="delete"/></button>
        </div>

    )
}