import React from "react";
import ItemCount from "./ItemCount";



const ItemListContainer = ({greetings})=>{

    return(
        <div className="greetings" style={{backgroundColor: 'red'}}>

            <h1>{greetings}</h1>
            <ItemCount stock="5" initial="1"/>

        </div>


    )

    

}

export default ItemListContainer;

