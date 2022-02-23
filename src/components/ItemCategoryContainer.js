import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { pelis, traerPeli, traerPelis } from "../mock/pelis";
import ItemList from "./ItemList";

export const ItemCategoryContainer = ()=>{

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    let {tipo} = useParams();
    console.log(tipo);

    const peliculasTipo = peliculas.filter(peli => peli.tipo==tipo);
    console.log(peliculasTipo);
        
            
            
    

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

        
    },[])

    return(

        <div>
            {cargando ? (
                <h1>Cargando...</h1>
            ) : (
               <>
                <ItemList pelis={peliculasTipo} />
                
               </>

            )}
        </div>
    )
    
}

