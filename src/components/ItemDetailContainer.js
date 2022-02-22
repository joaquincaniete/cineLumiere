import React from "react";
import {useState, useEffect} from "react";
import {ItemDetail, itemDetail} from "../components/ItemDetail"
import { useParams } from "react-router-dom";
import { pelis, traerPeli, traerPelis } from "../mock/pelis";

export const ItemDetailContainer = ({greetings})=>{

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    const{id} = useParams();

    const peliculaDetalle = peliculas.filter(peli => peli.id==id);
        
            
            
    

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

        
    },[id])

    return(

        <div>
            {cargando ? (
                <h1>Cargando...</h1>
            ) : (
               <>
               <ItemDetail pelis={peliculaDetalle} />
                
               </>

            )}
        </div>
    )
    
}

