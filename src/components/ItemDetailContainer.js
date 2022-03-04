import React, { useContext } from "react";
import {useState, useEffect} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { pelis, traerPeli, traerPelis } from "../mock/pelis";
import { CartContext, useCartContext } from "./context/CartContext";



export const ItemDetailContainer = ()=>{


    /*let carrito = JSON.parse(localStorage.getItem("carrito"))||[];*/
    

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    const {carrito} = useContext(CartContext);
    


    
    
    
    let {id} = useParams();
    console.log(id);
    

    const peliculaDetalle = peliculas.filter(peli => peli.id== id);
    console.log(peliculaDetalle);

    /*const onAdd = carrito.some(peli =>{return peli.id == id});
    console.log (onAdd);*/


    /*function guardarEnLocalStorage (array, nombre){
        localStorage.setItem(nombre, JSON.stringify(array));

        
    }*/
    /*function getLocalStorage (){
        let carrito = JSON.parse(localStorage.getItem("carrito"))||[];

    }*/
    
    /*const agregarAlCarrito = (id, title, count)=>{

        
        let carro = {
            id: id,
            title: title,
            cantidad: count,
        }

        carrito.push(carro);
        setPelisCarrito(carrito);
        guardarEnLocalStorage(carrito, "carrito");
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(carrito)
        };*/
            
            
    

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

        
    },[]);

    




    return(

        <div>
            {cargando ? (
                <h1>Cargando...</h1>
            ) : (
               
               
                <>
               {peliculaDetalle.map((peli)=>(
                   <ItemDetail{...peli} key={peli.id} />
                ))}
               
                
               </>
                
               
                
               

            )}
       </div>
    )
    
}

