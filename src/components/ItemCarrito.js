import { Col, Row } from "antd";
import { useContext } from "react";
import CartContext from "./context/CartContext";
import ItemContext from "./context/ItemContext";

const ItemCarrito = ({ id, title, price, img, cantidad }) => {
  const { eliminarItem } = useContext(CartContext);
  const { item, setItem } = useContext(ItemContext);

  function eliminar() {
    setItem(item - cantidad);
    eliminarItem(id);
  }

  return (
    <div
      style={{
        "border-radius": "10px",
        "background-color": "#5e5e5e",
        "font-size": "10px",
        display: "flex",
        width: "300px",
        height: "150px",
        flexDirection: "column",
        border: "1px solid gray",
        margin: "10px",
      }}
    >
      <>
        <Row>
          <Col span={4} offset={1}>
            <img className="imagen" src={img} height="100px" alt={title} />
          </Col>
          <Col span={8} offset={3}>
            <h2>{title}</h2>
            <h3>Valor Ticket: $ {price}</h3>
            <h3>Cantidad {cantidad}</h3>
            <button onClick={() => eliminar()}>Eliminar Item</button>
          </Col>
        </Row>
      </>
    </div>
  );
};
export default ItemCarrito;
