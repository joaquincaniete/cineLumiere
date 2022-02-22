import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { pelis, traerPeli, traerPelis } from "../mock/pelis";

export const ItemDetailContainer = ()=>{

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    let {id} = useParams();
    console.log(id);

    const peliculaDetalle = peliculas.filter(peli => peli.id==id);
    console.log(peliculaDetalle);
        
            
            
    

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
               {peliculaDetalle.map((peli)=>(
                   <ItemDetail{...peli} key={peli.id}/>
                ))}
               
                
               </>

            )}
        </div>
    )
    
}

