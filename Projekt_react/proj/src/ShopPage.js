import React from 'react';
import Header from './Header';
import ShopContent from './ShopContent'; 
import Footer from './Foot';
import LogReg from './LogRegContent';
const ShopPage = ({toggleModal, modal}) => {
  return (<>
    <div className='MyColor'>
    {modal && (<LogReg toggleModal={toggleModal}/>)}
      <Header toggleModal = {toggleModal} />
      <ShopContent />
      <Footer />
    </div></>
  );
};

export default ShopPage;