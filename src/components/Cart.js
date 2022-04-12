import React, { useContext, useEffect, useState } from "react";
import ItemCarrito from "../components/ItemCarrito";
import { Link } from "react-router-dom";
import { actualizarStock, generarOrden } from "../services/firebase";
import swal from "sweetalert";
import { Col, Row } from "antd";
import ItemContext from "./context/ItemContext";
import CartContext from "./context/CartContext";

export default function Cart() {
const compradorInicial = {
  name: "",
  phone: "",
  email: "",
};

  const {setItem} = useContext(ItemContext);
  const {cart, setCart} = useContext(CartContext);
  const [carrito, setCarrito] = useState ([]);
  const [comprador, setComprador] = useState(compradorInicial);

  useEffect(()=>{

    setCarrito (cart);
    console.log("pelis en carrito "+ cart);


  });
  
  


  let total = carrito.reduce(
    (acum, item) => acum + item.price * item.cantidad,
    0
  );

  const orden = {
    comprador,
    items: cart,
    total,
  };

  function vaciar (){
    setItem(0);
    setCart([]);
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      comprador.name !== "" &&
      comprador.phone !== "" &&
      comprador.email !== ""
    ) {
      generarOrden(orden)
        .then((res) => {
          swal("Orden Completa", `tu nro de orden es: ${res.id}`, "success", {
            button: "Ok!",
          });
        })
        .then(() =>
          carrito.forEach((item) => actualizarStock(item.id, item.cantidad))
        )
        .then(() => vaciar())
        .catch((err) =>
          swal(
            "Error",
            "Hubo un error, por favor intente nuevamente... gracias",
            "error"
          )
        );
    } else {
      swal(
        "Atención",
        "Por Favor revisa los datos del formulario, podria haber uno o mas vacios...",
        "info"
      );
    }
  };

  const handlerChange = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  return (
    
    <div>
      {carrito.length > 0  ? (
          <Row>
            <Col span={6} offset={3}>
              {cart.map((peli) => (
                <ItemCarrito {...peli} key={peli.id} />
              ))}
              <br />
            </Col>
            <Col span={6} offset={3}>
              <button onClick={() => vaciar()}>Vaciar Carrito</button>
              <br />
              Total Compra: $ ${total}
              <h2>Completa tus datos para finalizar la compra</h2>
              <br />
              <form
                className="formulario"
                onSubmit={handlerSubmit}
                onChange={handlerChange}
              >
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  value={orden.name}
                />{" "}
                <br />
                <input
                  type="number"
                  placeholder="Telefono"
                  name="phone"
                  value={orden.phone}
                />{" "}
                <br />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={orden.email}
                />{" "}
                <br />
                <button> Terminar</button>
              </form>
            </Col>
          </Row>
      ) 
      : 
      (
        <div>
          <br />
          <br />
          <br />
          <br />

          <h2>El Carrito esta Vacio </h2>
          <br />
          <br />
          <br />

          <Link to="/">
            <button>Volver al Home</button>
          </Link>
          <br />
          <br />
        </div>
      )}
      </div>
    
  );
}
