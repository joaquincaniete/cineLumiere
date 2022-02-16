import React from "react";
import ItemCount from "./ItemCount";

const Item = ({title, price, img})=>{

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

            <img ClassName ='imagen' src={img} width='200px' alt={title}/>
            </div>
            <h2>{title}</h2>
            <h3>Valor Ticket: $ {price}</h3>
            <ItemCount stock="5" initial="1"/>
        </div>
    );
};
export default Item;