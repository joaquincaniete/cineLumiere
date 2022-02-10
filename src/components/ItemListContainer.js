import React from "react";



const ItemListContainer = ({greetings})=>{

    return(
        <div className="greetings" style={{backgroundColor: 'red'}}>

            <h1>{greetings}</h1>

        </div>


    )

    

}

export default ItemListContainer;

