import React, { useState } from "react";
import { CartProvider } from "./context/CartContext";
import ItemCount from "./ItemCount";
import ModalVideo from "../components/ModalVideo/ModalVideo";
import { Button, Row, Col} from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import 'antd/dist/antd.css';





    
function ItemDetail (props) {

    

    const{id, price, title, img, trailer, onAdd, stock, resumen, poster, category}=props;
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
    function PosterMovie(props){
        const {img} = props;
        return <div className="movie_poster" style={{backgroundImage: `url(${img})`}}/>;

    }
 
    return(
        

        <div 
            className="movie" style={{backgroundImage: `url(${poster})`}}>
                
            <Row>
                <Col span={8} offset={3} className="movie_poster">
                <PosterMovie img ={img}/>
                <br/>
                {renderVideo()}

                </Col>
                <Col span={10} offset={1} className="movie_info">
                <div className="movie_dark"/>
                <h2>{title}</h2>
                <h3>Resumen de la trama:</h3>
                <p className="resumen">{resumen}</p> 
                <br/>
                <h2>Categoria:</h2>    
                <p className="resumen">{category}</p>
                <br/>
                <h3>Valor Ticket: $ {price}</h3>


            
                
                {price > 0 ? 
                <>
                {
                    stock > 0 ? 
                <CartProvider>
                    <ItemCount className="contador" stock={stock} initial="1" id={id} img={img} title={title} price={price} onAdd={onAdd}/>
                </CartProvider>
                    : <h5> Lamentablemente estamos sin stock...estamos reponiendo por favor intente nuevamente mañana</h5>
                    
                    
                }

                    <br/>

                    
                    
                
                </>
                    :
                    <>
                    <h2>Disponible Proximamente</h2>

                </>                    
                                       
                }
                </Col>
                            
            
        </Row>
        </div>
    
    )


};
export default ItemDetail;
