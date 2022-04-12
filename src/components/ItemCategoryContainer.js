import React from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { Loading } from "./loading/Loading";

export const ItemCategoryContainer = ()=>{

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    let {tipo} = useParams();
    console.log(tipo);

        
    const getData = async ()=>{
        try {
            const itemsCollection = collection (db,"Items")
            const coleccion = await getDocs(itemsCollection)
            const result = coleccion.docs.map((doc)=>doc = {id:doc.id, ...doc.data()})
            setPeliculas(result.filter(peli => peli.tipo===tipo))
           
            setCargando(false);
            
            
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData()
    },[tipo])
         
    

    return(

        <div>
            <>
     
               <Loading cargando={cargando}/>

                <ItemList pelis={peliculas} />
                
               </>

            
        </div>
    )
    
}

