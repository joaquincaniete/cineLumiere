import React from "react";
import Item from "../components/Item";

const ItemDetail = ({title, img})=> {
    return(
        <div>
            <div>
                <h2>Detalle de : {title}</h2>
                <h3>Resumen de la trama:</h3>     
                <img className="imagen" src={img} width = '500px'/>
                <h3>Ver Trailer</h3>
            
                
            </div>
        </div>
    )
};
export default ItemDetail;