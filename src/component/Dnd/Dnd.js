import React, {useState} from 'react';
import {AiFillCheckCircle} from "react-icons/ai"
import './dnd-styles.css'

const Dnd = () => {
    const [files,setFiles]=useState(null);
    const [extracted,setExtracted]=useState(false)
    const [animate,setAnimate]=useState(false)
    const handleDragOver = (e) => {
        e.preventDefault();

    }
    
    const handleDrop =(e) =>{
        setAnimate(true)
        setTimeout(()=>{
            setAnimate(false)
            
        },1000)
        e.preventDefault();
        setFiles(e.dataTransfer.files[0].name);
    }




    const handleClick = ()=>{
        if(files){
            setExtracted(()=>{
                return !extracted
            })
        }
    }

    return (
    <>
            <div className="main-container">
            <div className="dnd-container">
            {animate && <div className='load'>
                <div className='load-animation'></div>
                <p>Uploading</p>
                </div>}
            <div className="dnd" onDragOver={(e)=>handleDragOver(e)} onDrop={(e)=>handleDrop(e)}>
                <p>
                    Please Drag and drop your logo or upload from your device
                </p>
            </div>
            {files && 
            <div className='uploaded'>
                {files}
            </div>}
            <button className='extract-button' onClick={handleClick}> {!extracted?<p>Extract color palette</p>:<span>Extracted Successfully <AiFillCheckCircle className='check-icon'/></span>}</button>
            </div>
        </div>
    </>

)
}

export default Dnd