import React, { useEffect, useState } from 'react'
import { ReactDOM  } from 'react'; //pozwala na uzycie portal
import Modal from './Modal'
function ShopContentProduct({ product, imgCategory, setFilteredProducts, filteredProducts}) {
  


    useEffect(()=> {
        const filtrImg = imgCategory === 'all' ? product : product.filter(img => img.category === imgCategory);
        setFilteredProducts(filtrImg);
        localStorage.setItem('filteredimages', JSON.stringify(filtrImg));
    
    }, [imgCategory, product]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
  
    const openModal = (product) => {
      setSelectedProduct(product);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    

  return (
   <div>
    
        <div className="produkt-table">
        {filteredProducts.map((item)=>
        (    <div className="produkt" key = {item.id} >
            <div className="img-holder" style={{backgroundImage: `url(${item.image})`}} >
            <span onClick={()=> openModal(item)}></span>
            </div>
            <div className='text-holder'><p>{item.textContent}</p>
            <div className="price">
                  <a href=""><button>Brak na stanie</button></a>
                </div>
 
            </div>
            
           </div>
           
        )
        
        )  }
        </div>
        
        <Modal
        isShowing={isModalOpen}
        hide={closeModal}
        product={selectedProduct}
      />
    </div>
  );
};


export default ShopContentProduct