import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { pelis, traerPeli, traerPelis } from "../mock/pelis";

export const ItemDetailContainer = ()=>{


    

    const [peliculas, setPeliculas]= useState([])
    const [cargando, setCargando]=useState(true);
    const [pelisCarrito, setPelisCarrito] = useState([]);
    
    let {id} = useParams();
    console.log(id);

    const peliculaDetalle = peliculas.filter(peli => peli.id==id);
    console.log(peliculaDetalle);

    useEffect(()=>{
        getPelisCarrito();

    })

    const getPelisCarrito = ()=>{
        
        const carrito = JSON.parse(localStorage.getItem("carrito"))||[];

        
    };

    function guardarEnLocalStorage (array, nombre){
        localStorage.setItem(nombre, JSON.stringify(array));

        
    }
    
    const agregarAlCarrito = (id, title, count)=>{
        const carrito = pelisCarrito;
        let carro = {
            id: id,
            title: title,
            cantidad: count,
        }
        carrito.push(carro);
        setPelisCarrito(carrito);
        guardarEnLocalStorage(pelisCarrito, "carrito");
        console.log(`Se agrego ${title} con el ID: ${id} al carrito`);
        console.log(carrito)
        };
            
            
    

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
                   <ItemDetail{...peli} key={peli.id} agregarAlCarrito={agregarAlCarrito} />
                ))}
               
                
               </>
                
               
                
               

            )}
       </div>
    )
    
}

