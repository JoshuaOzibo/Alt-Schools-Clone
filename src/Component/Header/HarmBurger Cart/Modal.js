import React from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css';
const Modal = (props) => {
    const OverLay = (props) =>{
        return <div onClick={props.clickOverlay} id={classes.Overlay} className='md:hidden block'></div>
    }

    const BackDrop = (props) =>{
        return <div id={classes.Backdrop} className='md:hidden block'>
            <div>{props.children}</div>
        </div>
    }

    const documentId = document.getElementById('OverLay2');

  return (
    <>
      {ReactDom.createPortal(<OverLay clickOverlay={props.clickOverlay}  />, documentId)},
      {ReactDom.createPortal(<BackDrop>{props.children}</BackDrop>, documentId)}
    </>
  )
}

export default Modal;