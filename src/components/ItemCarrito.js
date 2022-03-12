import { useCartContext } from "../components/context/CartContext";


const ItemCarrito = ({id, title, price, img, cantidad})=>{

    const {eliminarItem} = useCartContext();
    return (
        <div
            style={{
                
                'border-radius':'10px',
                'background-color': '#5e5e5e',
                'font-size': '10px',            
                display: 'flex',
                height: '200px',
                flexDirection: 'column',
                border: '1px solid gray',
                margin: '10px',
            }}
        >
            <div>
                <br/>

            <img ClassName ='imagen' src={img} height='100px' alt={title}/>
            </div>
            <h2>{title}</h2>
            <h3>Valor Ticket: $ {price}</h3>
            <h3>Cantidad {cantidad}</h3>
            <button onClick={()=>eliminarItem(id)}></button>
            
            
            
            
        </div>
    );
};
export default ItemCarrito;