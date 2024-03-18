import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


const Modal = ({ isShowing, hide, product }) => {
  
  function handleOverlayClick(e) {
    if(e.target === e.currentTarget) {
      hide();
    }
  }

  return isShowing ? ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <Carousel autoPlay interval={1000} thumbWidth={100} infiniteLoop>
          <img src={product.image} alt={product.name} />
          <img src={product.imageS} alt={product.name} />
          <img src={product.imageT} alt={product.name} />
        </Carousel>
        <div className='modal_text'> 
          <div className='modal_head'>
            <h1>Zew Cthulhu: Księga Strażnika - Ekskluzywna Edycja Jubileuszowa + PDF</h1>  
            <button onClick={hide} style={{color:'white'}}>X</button>
          </div>
          <div>
            <span>wiek: 17 </span> 
            <span>Liczba Graczy: 2-6</span> 
            <span>Język: Polski </span>
          </div>
          <p>{product.textContent}</p>  
          <div className='modal_bottom_buttons'>
            <button>siemka</button>
            <button>siemka2 </button>
          </div>
        </div>
      </div>
    </div>, document.body
  ) : null;
};

export default Modal;