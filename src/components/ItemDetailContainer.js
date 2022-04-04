
import { collection, getDocs } from "firebase/firestore";
import db from "../services/firebase";
import {useState, useEffect} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
//import {traerPelis } from "../mock/pelis";



export const ItemDetailContainer = ()=>{


    /*let carrito = JSON.parse(localStorage.getItem("carrito"))||[];*/
    

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    
    
    let {id} = useParams();
    console.log(id);

    /*   

    const peliculaDetalle = peliculas.filter(peli => peli.id== id);
    console.log(peliculaDetalle);*/

   
   
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

        
    },[]);*/

    const getData = async ()=>{
        try {
            const itemsCollection = collection (db,"Items")
            const coleccion = await getDocs(itemsCollection)
            const result = coleccion.docs.map((doc)=>doc = {id:doc.id, ...doc.data()})
            setPeliculas(result.filter(peli => peli.id=== id))
           
            setCargando(false);
            
            
        } catch (error) {
            console.warn("error",error)
        }
    }

    useEffect(()=>{
        getData()
    },[id])



    return(

        <div>
            {cargando ? (
                <h1>Cargando...</h1>
            ) : (
               
               
                <>
               {peliculas.map((peli)=>(
                   <ItemDetail{...peli} key={peli.id} />
                ))}
               
                
               </>
            

            )}
       </div>
    )
    
}

