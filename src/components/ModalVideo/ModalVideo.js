import React, {useState, useEffect} from "react";
import { Modal } from 'antd';
import ReactPlayer from "react-player";

import "./ModalVideo.css";

export default function ModalVideo(props){
    const {isOpen, close, url,play, muted}= props;

    return (
        <div  >

        <Modal
            className="modal-video"
            visible={isOpen}
            centered={true}
            onCancel={close}
            footer={null}
            >
            <ReactPlayer
                url={url}
                playing={play}
                muted={muted}
                controls
                
                />
        </Modal>
    </div>

        
    );
}
