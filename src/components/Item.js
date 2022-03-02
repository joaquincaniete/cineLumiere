import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({id, title, price, img})=>{

    return (
        <div
            style={{
                
                'border-radius':'10px',
                'background-color': '#5e5e5e',
                'font-size': '10px',            
                display: 'flex',
                width: '300px',
                flexDirection: 'column',
                border: '1px solid gray',
                margin: '10px',
            }}
        >
            <div>
                <br/>

            <img ClassName ='imagen' src={img} width='200px' alt={title}/>
            </div>
            <h2>{title}</h2>
            <h3>Valor Ticket: $ {price}</h3>
            
            <Link to={`/pelicula/${id}`}>

            <button>ver detalles</button>
            </Link>
            
            
        </div>
    );
};
export default Item;