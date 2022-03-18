
import React, {useContext, useState} from "react";
import { CartContext, CartProvider } from "./context/CartContext";
import ItemCarrito from "../components/ItemCarrito";
import { Link } from "react-router-dom";
import { generarOrden } from "../services/firebase";

const compradorInicial ={
    name:"",
    phone:"",
    email:"",
}


export default function Cart (){


    /*const {cartPelis} = useCartContext();
    console.log(cartPelis);
    let pelis = cartPelis.flat();
    console.log(pelis);*/
    const {cart} = useContext(CartContext);
    const [comprador, setComprador] = useState(compradorInicial)
    let pelis = cart;

    let total = pelis.reduce((acum,item)=> acum + (item.price * item.cantidad),0)


    const orden = {
        comprador,
        items: cart,
        total,
    }

    const handlerSubmit =(e)=>{
        e.preventDefault()
        if(comprador.name != "" && comprador.phone != "" && comprador.email != ""){
            generarOrden(orden)
                .then((res)=>{
                    alert('tu nro de orden es: ${res.id}')
                })
        } else {
            alert ("Por favor revisa los datos del formulario")
        }
    }

    const handlerChange =(e)=>{
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value,
        })
    }
    


    return (
        <>

        <CartProvider>
        
        {pelis.length > 0 ?
            (
                <div>
                {pelis.map((peli)=>(
                <ItemCarrito{...peli} key={peli.id}/>
                ))}
                <br/>
                Total: $ ${total}

                <h2>Completa tus datos para finalizar la compra</h2>
                <form
                    onSubmit={handlerSubmit}
                    onChange={handlerChange}>
                        <input type="text"
                                placeholder="Nombre"
                                name="name"
                                value={orden.name}
                        
                        />
                        <input type="number"
                                placeholder="Telefono"
                                name="phone"
                                value={orden.phone}
                        
                        />
                        <input type="email"
                                placeholder="Email"
                                name="email"
                                value={orden.email}
                        
                        />
                        <button> Terminar</button>

                </form>
                
                
                
                </div>
                
            )
        
            
        : <div>
            <br/><br/><br/><br/>
            

            <h2>El Carrito esta Vacio </h2>
            <br/><br/><br/>

            <Link to="/">
            <button>Volver al Home</button>
            </Link>
            <br/><br/>
            </div>
        }

        

        
        </CartProvider>
            </>
    );
}