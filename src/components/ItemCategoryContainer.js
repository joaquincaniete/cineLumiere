import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import { pelis, traerPeli, traerPelis } from "../mock/pelis";
import ItemList from "./ItemList";

export const ItemCategoryContainer = ()=>{

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    let {tipo} = useParams();
    console.log(tipo);

    const peliculasTipo = peliculas.filter(peli => peli.tipo==tipo);
    console.log(peliculasTipo);
        
    const getData = async ()=>{
        try {
            const itemsCollection = collection (db,"Items")
            const coleccion = await getDocs(itemsCollection)
            const result = coleccion.docs.map((doc)=>doc = {id:doc.id, ...doc.data()})
            setPeliculas(result)
           
            setCargando(false);
            
            
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
         
            
    /*

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

        
    },[])*/

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

