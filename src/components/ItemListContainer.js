import React, { useState, useEffect } from "react";
import { traerPelis } from "../mock/pelis";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";



const ItemListContainer = ({greetings})=>{

    const [peliculas, setPeliculas]=useState([]);
    const [cargando, setCargando]=useState(true);

    useEffect(()=>{
        traerPelis
            .then((res)=>{
                setPeliculas(res);
            })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setCargando(false);
            });

    }, []);


    return(

        

        <div className="greetings" style={{backgroundColor: 'red'}}>
            {cargando ? (
                <h1>Cargando...</h1>
            ) : (
               <>
                <h1>{greetings}</h1>
                <ItemList pelis={peliculas} />
               
               </>

            )}
        </div>
        


    );

    

};

export default ItemListContainer;

