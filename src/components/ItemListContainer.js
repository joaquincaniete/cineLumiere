import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import React, { useState, useEffect } from "react";
//import { traerPelis } from "../mock/pelis";
import ItemList from "./ItemList";
import { Loading } from "./loading/Loading";

const ItemListContainer = ({greetings})=>{

    const [peliculas, setPeliculas]=useState([]);
    const [cargando, setCargando]=useState(true);

    const enCartelera = peliculas.filter(peli => peli.tipo ==='estreno');
    const proximamente = peliculas.filter(peli => peli.tipo ==='proximamente');
    const clasica = peliculas.filter(peli => peli.tipo ==='clasica');

    /*useEffect(()=>{
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

    }, []);*/

    

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

    console.log("Peliculas:", peliculas);


    return(

        

        <div className="greetings" >
            {/*cargando ? (
                <Loading/>
            ) : (
               <>
                <h1>{greetings}</h1>
                <ItemList pelis={enCartelera} />
                <ItemList pelis={proximamente} />
                <ItemList pelis={clasica} />
               
               </>

            )*/
            <>
            <Loading cargando={cargando}/>
            <ItemList pelis={enCartelera} />
            <ItemList pelis={proximamente} />
            <ItemList pelis={clasica} />
            </>

            
            
            }
        </div>
        


    );

    

};

export default ItemListContainer;

