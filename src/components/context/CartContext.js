import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  useEffect (()=>{
    console.log("cart actualizado "+cart);
  },[cart]);

  function agregarAlCarrito (id, title, count, img, price){
    let carro = {
        id: id,
        title: title,
        cantidad: count,
        price: price,
        img: img,
      };
      if (!itemIsInCart(id)) {
        
        setCart(...cart, carro);
        console.log("if");
        
        
      } else {
        console.log("else");
        const cartAux = cart;
        const position = cart.findIndex((item) => item.id === id);
        cartAux[position].cantidad = cartAux[position].cantidad + count;
        setCart (cartAux);
        
      }
  };

  const itemIsInCart = (id) => {
    if (cart.lenght > 0) {
      return cart.some((e) => e.id === id);
    } else {
      return false;
    }
  };

  




  return (
    <CartContext.Provider value={{ cart, setCart, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
export { CartProvider };