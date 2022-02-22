import React, { useState, useEffect } from "react";
import { traerPelis } from "../mock/pelis";
import ItemList from "./ItemList";



const ItemListContainer = ({greetings})=>{

    const [peliculas, setPeliculas]=useState([]);
    const [cargando, setCargando]=useState(true);

    const enCartelera = peliculas.filter(peli => peli.tipo =='en cartelera');
    const proximamente = peliculas.filter(peli => peli.tipo =='proximamente');
    const clasica = peliculas.filter(peli => peli.tipo =='clasica');

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
                <ItemList pelis={enCartelera} />
                <ItemList pelis={proximamente} />
                <ItemList pelis={clasica} />
               
               </>

            )}
        </div>
        


    );

    

};

export default ItemListContainer;

