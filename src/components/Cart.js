
import { CartProvider, useCartContext } from "./context/CartContext";
import ItemCarrito from "../components/ItemCarrito";

export default function Cart (){
    
    /*const {cartPelis} = useCartContext();
    console.log(cartPelis);
    let pelis = cartPelis.flat();
    console.log(pelis);*/
    const {getCart} = useCartContext();
    let pelis = getCart();


    return (
        <>

        <CartProvider>

        

        {pelis.map((peli)=>(
            <ItemCarrito{...peli} key={peli.id}/>
            ))}
        </CartProvider>
            </>
    );
}