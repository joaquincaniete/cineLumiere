import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import ItemCount from "./ItemCount";
import ModalVideo from "../components/ModalVideo/ModalVideo";
import { Modal, Button} from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';

import Icon from "@ant-design/icons/lib/components/Icon";



    
function ItemDetail (props) {

    

    const{id, price, title, img, trailer, onAdd, stock, resumen}=props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const openModal =()=> setIsVisibleModal(true);
    const closeModal =()=> setIsVisibleModal(false);

    const renderVideo =()=>{
        return(
            <>
            <Button shape="round" size="large" icon={<PlayCircleOutlined />} onClick={openModal}>
                Ver Trailer
            </Button>
            <ModalVideo
                
                playing = {isVisibleModal}
                volume = {0.5}
                muted = {isVisibleModal}
                isOpen = {isVisibleModal}
                close = {closeModal}
                url = {trailer}
            />
            </>
        );
    }
 
    return(
        

        <div>
            <div>
                <h2>Detalle de : {title}</h2>
                <h3>Resumen de la trama:</h3>
                <p>{resumen}</p>     
                <img className="imagen" src={img} width = '500px'/>
                <h3>Valor Ticket: $ {price}</h3>
                
                {price > 0 ? 
                <>
                <CartProvider>
                {
                    stock > 0 ? 
                    <ItemCount stock={stock} initial="1" id={id} img={img} title={title} price={price} onAdd={onAdd}/>
                    : <h5> Lamentablemente estamos sin stock...estamos reponiendo por favor intente nuevamente mañana</h5>
                    
                    
                }
                </CartProvider>

                    <br/>

                    {renderVideo()}
                    
                
                </>
                    :
                    <>
                    {renderVideo () }

                </>                    
                                       
                                    }
                            
            </div>
        </div>
    
    )
};
export default ItemDetail;
